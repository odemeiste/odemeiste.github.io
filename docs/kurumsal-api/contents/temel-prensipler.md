
# 3. Temel Prensipler <!-- omit in toc -->

Temel prensipler ile ilgili belirlenen kurallar 'Aktif Sürüm' içerisinde yer alan 'Temel Prensipler' ile aynıdır. Detaylı bilgi için **'Aktif Sürüm'** kontrol edilmelidir. 

Öİ Kurumsal API üretim ortamına alınmadan önce BKM'ye bilgi verilmesi ve iş modeli(usecase) onayı alınması zorunludur. Kurumsal API hizmeti verecek katılımcıların işyerleri ile paylaştıkları entegrasyon vb dokümanlarını BKM ile paylaşması zorunludur.

Bu bölümde sadece Öİ Kurumsal API ile ilgili farklılaşan kısımlar anlatılmaktadır. 


## 3.1. Genel İlkeler

-  Öİ hizmetinin alacaklı ÖHS tarafından API ile bir işyerine/kuruma vb. açılması için alacaklı ÖHS ile ilgili işyeri arasında sözleşme imzalanması( işyeri sözleşmesi, Kurum ile ÖHS arası sözleşme vb.) şartı olacaktır. Yapılan sözleşme işyeri ve alacaklı ÖHS arasında yapılacak olup BKM sorumluluğu dışındadır.

- Tüm alacaklı ÖHS’lerin işyerlerine token endpointi açması zorunludur. 
    - Açılacak token endpointinde kullanılacak güvenlik önlemleri Alacaklı ÖHS sorumluluğundadır. 
    - Yöntem olarak Bearer Authentication kullanılmalıdır.

## 3.2. Mesaj İmzalama

Dijital imzalama yapısı, Ödeme İste Kurumsal API’de gerçekleştirilen işlemlerin ve taşınan verilerin bütünlük ve inkâr edilemezliğini sağlamak amacıyla kurgulanmıştır. İmzaların kaynak bazında hangi istek ve yanıtlara uygulandığı belirlidir.

API yalnızca TLS'ye dayanırsa, dijital kayıtları ve inkâr edilemezlik kanıtlarını tutmak zor olur. Bu nedenle, TLS'ye dayanmayan bir inkâr edilemezlik çözümü olarak API isteğinin HTTP başlığında bir JWS kullanılarak sağlanabilir.

HTTP isteğinin gövdesinin hash fonksiyonu (SHA256) ile özeti alınacaktır. Elde edilen özet, asimetrik anahtarları destekleyen bir algoritma kullanılarak imzalanacak ve JWS elde edilecektir. İsteğin kendinize geldiği durumda body üzerinde hiç bir değişikliğe tabi tutmadan (serialize/deserialize, minify, trim, vb yapmadan) doğrulama yapmanız gerekmektedir. Aynı şekilde isteğin kendinizden çıktığı aşamada da response body üzerinde hiç bir değişikliğe tabi tutmadan (serialize/deserialize, minify, trim, vb yapmadan) mesaj imzalama yapılmalıdır.

Bu kapsamda imzalama akışı aşağıdaki gibi olmalıdır:

- İşyeri öncelikle özel ve açık anahtarlarını oluşturmalıdır. İşyeri'nin açık anahtar bilgisi, alacaklı ÖHS ile bir kereye mahsus güvenli bir şekilde paylaşılmalıdır. Bu anahtarları oluşturmak için aşağıda “openssl” kullanılarak oluşturma örneği paylaşılmıştır. Bu anahtarlardan özel olan anahtar mesajı imzalamak için kullanılacak olup, açık anahtar ise mesajı doğrulamak amacıyla mesajın alıcısı tarafından kullanılacaktır.


Özel anahtarın oluşturulması. private.pem => Özel anahtar <br>
**```openssl genrsa -out private.pem 2048```**<br><br>

Özel anahtardan açık anahtarın oluşturulması. public_key.pem => Açık anahtar (Alacaklı ÖHS ile paylaşılacak açık anahtar)<br>
**```openssl rsa -in private.pem -pubout -outform PEM -out public_key.pem```**<br><br>

Opsiyonel olarak özel anahtarın PCKS8 formatına çevrilmesi (Java açısından PCKS8 formatında olma ihtiyacı nedeniyle). private_key.pem => Özel anahtarın formatlanmış hali. <br>
**```openssl pkcs8 -topk8 -inform PEM -in private.pem -out private_key.pem –nocrypt```**<br><br>

**Açık ve Özel anahtarlar oluşturulduktan sonra Açık Anahtar Alacaklı ÖHS ile paylaşılır. Alacaklı ÖHS bu açık anahtarı mesaj doğrulamada kullanmak için bir Anahtar Deposu yaklaşımı ile bünyesinde tutar.**

İstek mesajının doğrulanması; İmzalı mesajı açacak olan alacaklı ÖHS mesajı imzalayan işyerinin açık anahtarını kullanarak mesajı doğrular. İlgili mesaj doğrulama hatalı ise isteği **TR.OIS.Resource.InvalidSignature** hatası döner.


Yanıt mesajının doğrulanması; işyeri tarafından yanıt mesajı içerisinde yer alan imzanın doğrulanması aşamasında hata alınması durumunda işleme devam edilmemeli ilgili ödeme iste talebi iptal edilmelidir.



**İmzalama Kuralları (İsteği Başlatan İşyeri)**

İşyeri üzerinden başlayan akış örnek olarak paylaşılmıştır.

- İsteği başlatan işyeri, mesaj imzalama gerektiren her API isteğinin HTTP gövdesini (request body) kendi özel anahtarı ile şifreleyerek imza bilgisini oluşturur.
- Ardından bu imza verisini, göndereceği mesajın istek başlığında yer alan X-JWS-Signature alanında göndermelidir.
- X-JWS-Signature alanında gönderilecek olan bilgi aşağıdaki yöntem ile oluşturulmalıdır.
    1. Bu alana yazılacak olan bilgi JWT formatında oluşturulmalıdır.
    2. Bir JWT, header-payload-signature alanlarından oluşmaktadır.
    - Header alanında JWT’yi imzalamak için kullanılacak algoritma belirtilmelidir. Standartlar kapsamında RS256 kullanılacaktır.
    - Payload kısmında özel olarak oluşturulacak olan “body” claim alanına istek gövdesi (request body) verisinin SHA256 hash değeri karşılığı yazılmalıdır.
    - JSON payload oluşturulurken RFC 7519 baz alınmalıdır. "iss" (Issuer) Claim, "exp" (Expiration Time) Claim, "iat" (Issued At) Claim, “body” Claim alanlarının gönderilmesi zorunludur.^RFC7519(opens new window)

        a. "iss" (Issuer) Claim : Kurumunuza özel bilgidir. Örnek olarak fqdn bilginiz olabilir. https://xisyeri.com.tr

        b. "exp" (Expiration Time) Claim: Saniye cinsinden (Unix time) imzanın son geçerli olduğu tarih. Bu tarih mevcut sunucu saatinizden 60 dakika sonra olacak şekilde kullanılmalıdır.

        c. "iat" (Issued At) Claim : Saniye cinsinden (Unix time) imzanın oluşturulduğu tarih. Bu tarih mevcut sunucu saatinizden 5 dakika önce olacak şekilde kullanılmalıdır.

        d. “body” Claim : istek gövdesi (request body) verisinin SHA256 hash değeri karşılığı.
    - Signature alanında da özel anahtar ile imzalanmış olan imza içeriği yer alacaktır.

**X-JWS-Signature**: JWS imzasını içeren istek başlığı. Bu başlığın ne zaman belirtilmesi gerektiği hususu ilgili endpoint için belirtilmiştir.

**Örnek X-JWS-Signature Payload Değeri**

```{"iss": "https://xbank.com.tr","exp": 1646832405,"iat": 1646746005,"body": "c543072f97a761a1d891dc81acc380bc1e6f61ca6541bd93ebfdece338457922"}```

-	İstek gönderilir. Sadece mesajın bütünlüğünü ve doğruluğunu teyit amacı ile istek gövdesi (request body) SHA256 hash değeri imzalanarak X-JWS-Signature alanında bu imza iletilir. İsteğin gövde (request body) kısmı açık ve şifresiz olarak gönderilmektedir.

-   İsteği alan Alacaklı ÖHS, talebi gerçekleştirmeden önce aldığı API isteklerinin imzasını doğrulamalıdır. X-JWS-Signature alanındaki JWT aşağıdaki adımlarla doğrulanmalıdır.

    1. Header kısmındaki algoritmanin RS256 olduğu kontrol edilir.
    2. Gönderen katılımcının açık anahtarı ile JWT verify (doğrulama) işlemi yapılır.
    3. Yukarıdaki işlemlerin doğruluğunun ardından JWT’nin payload kısmındaki “body” claim alanındaki bilginin, isteğin gövde verisinin SHA256 hash değerlerinin aynı olduğu kontrol edilir.
    4. Örnek checksum değeri <br>
        "a64b19f95eeb1fb0a0a3e2dbbc6e3d8472c52184d4543417ddc6d156fc5c5571" veya <br>
        "A64B19F95EEB1FB0A0A3E2DBBC6E3D8472C52184D4543417DDC6D156FC5C5571" şeklinde olabilir. İki hali de aynı değere sahiptir.     Kontrollerde buna dikkat edilmesi gerekmektedir.

-	Yukarıdaki işlemler ile doğruluğu teyit edilmiş olan isteğin talebi gerçekleştirir.
-	Eğer istek doğrulanamıyor ise işyerinin açık ve özel anahtar çifti yenilenmiş olabilir. Bu durumda Alacaklı ÖHS, işyerine ait açık anahtarın doğruluğunu kontrol eder.
-	Ardından imzayı tekrar açık anahtar ile doğrulayarak kontroller gerçekleştirilir. (Eğer halen doğrulama işlemi başarısız ise bu istek için hata akışı çalıştırılır. **TR.OIS.Resource.InvalidSignature** kodu ile hata üretilebilir.)
-	İmza bilgisinin beklendiği (x-jws-signature) servislerde, bu bilginin iletilmediği durumlarda **TR.OIS.Resource.MissingSignature** hatası üretilebilir.
-	İsteği alan Alacaklı ÖHS; isteği işledikten sonra cevabı oluştururken de yukarıdaki akışlar ile göndereceği cevabı imzalamalıdır.
-	İstek yanıt gövdesinin SHA256 checksum değeri için hexadecimal çıktı kullanılacaktır. Oluşacak çıktının 64 karakter olması beklenmektedir. Kontrol için "^[A-Fa-f0-9]{64}$" RegEx tarifini kullanabilirsiniz.

**Anahtar Deposu**

ÖHS'ler tarafından güvenilen bir Güven Otoritesi (Trust Anchor), taraflar için bir genel anahtar deposu sağlamaktan sorumludur.
Güven Otoritesi, taraflardan herhangi birisinin oluşturduğu bir anahtar çiftinin açık bölümünü saklayan merkezi bir dizin olacaktır.

## 3.3. Gereksinimlerinin Sınıflandırılması

Erişim adreslerinin ve alanların kullanımı Zorunlu(Z), İsteğe Bağlı(İ), Koşullu(K), Yok(N/A) olabilir. Kullanımlara ilişkin durumlar ve kullanımın (K) koşullu olduğu duruma ilişkin açıklamalar ilgili tablolarda belirtilmiştir.

Öİ API'lerinin istek ve yanıtta kullanılacak başlık isimleri, ilgili RFC dokümanlarında ve aşağıdaki tabloda yer aldığı şekilde kullanılacaktır. Uygulamaya özelleşmiş başlıklar "X-" ile başlayacaktır. Başlık isimlerinde yer alacak kısaltmalar tamamı büyük harfle yazılacak şekilde tanımlanacaktır. Başlık isimleri büyük – küçük harfe duyarlı olmamalıdır. Örneğin x-request-id ya da X-Request-ID olarak gönderilmiş olan bir istek başlığı değişkeni, sunucu tarafında hata vermeyecek şekilde işlenebilmelidir.

**'Aktif Sürüm'** -> **'Temel Prensipler'** -> **'Gereksinimlerinin Sınıflandırılması'** menüsünden detaylı bilgiye erişebilirsiniz.

## 3.5. İstek Başlığı

-	"Başlık isimleri" yorumlanırken küçük büyük harfe duyarlı olmamalıdır. Örneğin "x-ReQuEsT-Id" geçerli bir başlık ismidir.
-	"Başlık değerleri" yorumlanırken ise küçük büyük harf duyarlılığı olmalıdır. Örneğin "xyz123" ile "XYZ123" değerleri farklıdır.
-	Başlık değerlerinde ISO-8859-1 standartında yer alan karakter kümesi kullanılmalıdır. Örneğin "X-Request-Id" değerinde "İOS12" yazmak, büyük "İ" harfinin ISO-8859-1 içerisinde yer almamasından dolayı, hataya yol açacaktır.
-	İstek ve Yanıt başlığında yer alan alanların; POST GET PUT metotlarında, Zorunlu/Koşullu/İsteğe Bağlı/Yok kullanım durumları aşağıdaki tabloda listelenmiştir.

**İstek Başlığında Yer Alan Veriler**

|Başlık İsimleri |Format |Notlar |POST |GET |PUT |
| --- | --- | --- | --- | --- | --- |
|X-Request-ID  | AN1..36 | İsteği başlatan işyeri tarafından belirlenen çağrıya özgü talep kimliği. İstek numarası. <br> Örnek: Ödeme iste talebi iş akışının her adımında farklı “x-request-id” değeri kullanılır. <br> Çağrıların aynı yanıtı dönmesinin beklendiği durumlarda (idempotent işlemlerde) aynı değer ile çağrı yapılır.  | Z |Z |Z  |
|Content-Type | AN1..20| Standart HTTP Başlığı; Talepte sağlanan payload’ın biçimini temsil eder. Bu değerin application/json olarak gönderilmesi gerekmektedir. Hata durumlarında application/problem+json da iletilebilir.<br> (Başka bir değere ayarlanırsa, ÖHS, 415 Desteklenmeyen Ortam Türü (Unsupported Media Type) ile yanıt vermelidir)|Z|-|Z|
|X-Merchant-ID |AN1..36| Alacaklı ÖHS tarafından işyerine tahsis edilen tekil kimlik bilgisidir. İstek gövdesindeki isyeriKodu ile aynı değer olmalıdır. |Z |Z|Z| 
|X-Sub-Merchant-ID|AN1..36|Alacaklı ÖHS tarafından alt işyerine tahsis edilen tekil kimlik bilgisidir. İstek gövdesindeki altIsyeriKodu ile aynı değer olmalıdır.  |İ|İ|İ|
|Authorization|AN1..4096|İsteği başlatan işyeri tarafından doldurulması gerekli token bilgisidir.|Z|Z|Z|
|X-JWS-Signature|AN1..4096|HTTP isteğinin gövdesinin hash fonksiyonu (SHA256) ile özeti alınacaktır. Elde edilen özet, asimetrik anahtarları destekleyen bir algoritma kullanılarak imzalanacak ve JWS elde edilecektir.Bu başlığın ne zaman belirtilmesi gerektiği hususu ilgili endpoint için imzalama türü başlığında İmzalı İstek olarak belirtilmiştir.|Z|-|Z|


## 3.6. Yanıt Başlığı

-	"Başlık isimleri" yorumlanırken küçük büyük harfe duyarlı olmamalıdır. Örneğin "x-ReQuEsT-Id" geçerli bir başlık ismidir.
-	"Başlık değerleri" yorumlanırken ise küçük büyük harf duyarlılığı olmalıdır. Örneğin "xyz123" ile "XYZ123" değerleri farklıdır.
-	 Başlık değerlerinde ISO-8859-1 standartında yer alan karakter kümesi kullanılmalıdır. Örneğin "X-Request-Id" değerinde "İOS12"  
    yazmak, büyük "İ" harfinin ISO-8859-1 içerisinde yer almamasından dolayı, hataya yol açacaktır.


**Yanıt Başlığında Yer Alan Veriler**

|Başlık İsimleri |Format |Notlar |POST |GET |PUT |
| --- | --- | --- | --- | --- | --- |
|X-Request-ID  | AN1..36 | İsteği başlatan işyeri tarafından belirlenen çağrıya özgü talep kimliği. İstek numarası. <br> Örnek: Ödeme iste talebi iş akışının her adımında farklı “x-request-id” değeri kullanılır. <br> Çağrıların aynı yanıtı dönmesinin beklendiği durumlarda (idempotent işlemlerde) aynı değer ile çağrı yapılır. <br> **İlgili istek başlığındaki bilgi geri dönülür.**   | Z |Z |Z  |
|Content-Type | AN1..20| Standart HTTP Başlığı; Talepte sağlanan payload’ın biçimini temsil eder. Bu değerin application/json olarak gönderilmesi gerekmektedir. Hata durumlarında application/problem+json da iletilebilir.<br> (Başka bir değere ayarlanırsa, ÖHS, 415 Desteklenmeyen Ortam Türü (Unsupported Media Type) ile yanıt vermelidir)|Z|-|Z|
|X-Merchant-ID |AN1..36|  <br> **İlgili istek başlığındaki bilgi geri dönülür.**  |Z|Z|Z| 
|X-Sub-Merchant-ID|AN1..36| <br> **İlgili istek başlığındaki bilgi geri dönülür.**	|İ|İ|İ|
|X-JWS-Signature|AN1..4096|HTTP yanıtının gövdesinin hash fonksiyonu (SHA256) ile özeti alınacaktır. Elde edilen özet, asimetrik anahtarları destekleyen bir algoritma kullanılarak imzalanacak ve JWS elde edilecektir.Bu başlığın ne zaman belirtilmesi gerektiği hususu ilgili endpoint için imzalama türü başlığında İmzalı Yanıt olarak belirtilmiştir.|Z|Z|Z|


## 3.7. HTTP Durum Kodları

RFC 2616'da belirlenmiş olan durum kodları (status code) gönderilen isteğin durumunu  standart bir şekilde ifade eder. Eğer bir hata varsa hatayı, gönderilen istek başarılı bir şekilde işlem gördüyse ona ilişkin durumu aktarır. Durum kodları genel olarak 5 kategoridedir.
-	1xx Bilgi
-	2xx Başarılı
-	3xx Yönlendirme
-	4xx İstemci Hatası
-	5xx Sunucu Hatası

**'Aktif Sürüm'** -> **'Temel Prensipler'** -> **'HTTP Durum Kodları'** menüsünden detaylı bilgiye erişebilirsiniz.

## 3.8. Fonksiyonel Olmayan Gereksinimler

BKM Geçit’te katılımcı, API endpointi, çağrım metodu bazında (Path+Method+Katılımcı) 10 saniyede çağırılabilecek işlem sayısı 1000 olarak belirlenmiştir. Bu rakamın üzerinde yapılacak işlemlerde BKM Geçit tarafından HTTP 429 - Too Many Requests hatası dönülecektir.

## 3.9. Sıralı Veri Türleri

**Tablo 6: Sıralı Veri Türleri**

|**Kod** |**Açıklama** |
| --- | --- |
|TR.OIS.DataCode.MusteriTip	| B: Bireysel <br>K: Kurumsal |
|TR.OIS.DataCode.KimlikTur	| Kod, Tip, Format <br>K , TCKN , N11 <br>V, VKN, AN10 <br>Y , YKN , N11 <br>P , PNO , AN7..9|
| TR.OIS.DataCode.OdemeAmaci |  Ödemenin Amacına yönelik olarak aşağıdaki değerlerden birini alır:<br><br>01: Konut Kira Ödemesi<br> 02: İş Yeri Kira Ödemesi<br> 03: Diğer Kira Ödemesi<br> 04: E-Ticaret Ödemesi: Elektronik ticaret işlem amaçlı aktarımlar<br> 05: Çalışan Ödemesi: Maaş, harcırah, prim gibi çalışan ödemeleri<br> 06: Ticari Ödeme: Kurumların ve ticari işletmelerin birbirlerine, kendi hesaplarına veya müşterilerine ödemeleri, ithalat, ihracat, şirket satın alma, mal ve hizmet alımı vb. kapsamında ödemeler<br> 07: Bireysel Ödeme: Özel amaçlı (aile bireylerine, alışveriş vs.) ödemeler<br> 08: Yatırım: Finansal olmayan varlıklara yatırım amaçlı ödemeler(tahsilat vb.), menkul kıymet ve finansal varlık alım/satım ile temettü ve kupon ödemeleri, BES vb. gibi yatırım amaçlı ödemeler<br> 09: Finansal: Spot döviz işlemleri, türev işlemleri (swap, forward, future, opsiyon vb.), mevduat, kredi, depo, repo<br> 10: Eğitim Ödemesi<br> 11: Aidat Ödemesi<br> 12: Gayrimenkul Alım Ödemesi**<br> 13: Motorlu Taşıt Alım ödemesi**<br> 14: Borç Verme/Borç Ödeme**<br> 15: Hediye/Bağış/Yardım**<br> 16: Vergi/Resim/Harç Ödemesi**<br> 17: Tazminat/Sigorta Ödemesi**<br> 20: Kripto/Dijital Varlık**<br> 21: Şans Oyunları/Bahis Ödemesi**<br> 22: Eğlence/Sosyal Medya Ödemesi**<br> 99: Diğer ** (Diğer seçeneği ÖHS "Havale" süreçleri için eklenmiştir. FAST işlemlerinde "Diğer" ödeme amacı kullanılmamalıdır.) <br> <br> **Liste içerisinde ** ile işaretlenen 'Ödeme Amacı' değişiklikleri,  Merkez Bankası geçiş süreciyle senkronize şekilde, 26 Şubat 2026 Perşembe gün sonu ile birlikte devreye alınacaktır.** |
|TR.OIS.DataCode.AkisTur	|01: Hesaptan Hesaba Ödemeler <br>02: Hesaptan Hesaba İşyeri Ödemeleri <br><br> Kurumsal API üzerinden başlatılan Ödeme İste talepleri için akış türü "01: Hesaptan Hesaba Ödemeler" ve "02: Hesaptan Hesaba İşyeri Ödemeleri" iletilebilir.<br>"01: Hesaptan Hesaba Ödemeler" ve "02: Hesaptan Hesaba İşyeri Ödemeleri" akış türleri ile ilgili "Fast Sistemi Referans Belgesi ve Ödeme İste Genel İlkeler Belgesi" dokümanına uyulması gerekmektedir. |
| TR.OIS.DataCode.OdemeIsteDurumu | A: Alacaklı ÖHS'de talep oluşturuldu <br> B: Yanıt Bekleniyor<br>K: Kabul Edildi<br>G: Ödeme Sistemine İletildi<br>O: Ödeme Gerçekleşti<br> I: İptal Edildi |
| TR.OIS.DataCode.OdemeIsteIptDtyKod | '01': Borçlu Müşteri Ödeme İsteğini Reddetti<br>'02': Borçlu Müşteri Beklenen Sürede Ödeme İsteğine Yanıt Vermedi<br>'03': Borçlu ÖHS Fraud Nedeniyle İptal Etti<br>'04': Borçlu ÖHS Ödeme Sistemine İletemedi<br>'05': Borçlu ÖHS Ödeme İste Yanıt’ını Alacaklı ÖHS’ye İletemedi<br>'11': Alacaklı Müşteri Ödeme İste Talebinden Vazgeçti<br>'12': Alacaklı ÖHS Fraud Nedeniyle İptal Etti<br>'13':  Alacaklı ÖHS Ödeme İste Değerleri Uyuşmaması Nedeniyle İptal Etti<br>'21': FAST Sistem Hatası<br>'22':  FAST Ödeme İste Bilgileri Doğrulanamadı<br>'23':  FAST Ödeme İste Zaman Kontrolleri Doğrulanamadı<br>|
|TR.OIS.DataCode.EvetHayir	| E: Evet <br>H: Hayır |
|TR.OIS.DataCode.KolasTur	| Müşterinin sorgulama istediği Kolay Adres Tipi değeridir. Alabileceği değerler BKM “Kolay Adresleme Sistemi Uygulama Kuralları” belgesinde tanımlıdır: <br>T: Telefon Numarası <br>E: E-Posta<br>K: TCKN<br>V: VKN<br>Y: YKN<br>P: Pasaport Numarası|

