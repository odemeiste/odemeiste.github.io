

# 3. Temel Prensipler <!-- omit in toc -->

Bu bölümde Ödeme İste Servisleri için tanımlanan temel prensipler açıklanmaktadır.  

<!--
- [3.1 Genel İlkeler](#_3-1-genel-ilkeler)
- [3.2.	İstem ve Oturum](#_3-2-istem-ve-oturum)
- [3.3.	RESTful API](#_3-3-restful-api)
- [3.4.	Sürüm Yönetimi](#_3-4-surum-yonetimi)
- [3.5.	Kaynak URI Yol Yapısı](#_3-5-kaynak-uri-yol-yapısı)
- [3.6.	Karakter Kodlama](#_3-6-karakter-kodlama)
- [3.7.	Veri Formatı](#_3-7-veri-formatı)
- [3.8.	İstemci Sertifika Yönetimi](#_3-8-istemci-sertifika-yonetimi)
- [3.9.	Yetkilendirme Türleri](#_3-9-yetkilendirme-turleri)
- [3.10. İstek/Cevap Mesajlarında Kullanılan Nesne Yapıları](#_3-10-istek-cevap-mesajlarında-kullanılan-nesne-yapıları)
- [3.11. Sayfalandırma ve Filtreleme](#_3-11-sayfalandırma-ve-filtreleme)
- [3.12. Mesaj İmzalama](#_3-12-mesaj-imzalama)
- [3.13. Durum Kodu](#_3-13-durum-kodu)
- [3.14. Gereksinimlerinin Sınıflandırılması](#_3-14-gereksinimlerinin-sınıflandırılması)
- [3.15. İstek Başlığı](#_3-15-istek-baslıgı)
- [3.16. Yanıt Başlığı](#_3-16-yanıt-baslıgı)
- [3.17. Idempotency Kuralları](#_3-17-idempotency-kuralları)
- [3.18. HTTP Durum Kodları](#_3-18-http-durum-kodları)
- [3.19. Maskeleme Kuralları](#_3-19-maskeleme-kuralları)
- [3.20. Fonksiyonel Olmayan Gereksinimler](#_3-20-fonksiyonel-olmayan-gereksinimler)

-->

## 3.1 Genel İlkeler

- Ödeme İste Sistemi, BKM tarafından işletilecektir. 
- 7x24 esasına göre çalışacaktır.
- FAST Sistemi katılımcıları katılabilir. Ancak, FAST Sistemine katılımları TCMB nezdinde onaylanmış katılımcı adayları da Ödeme İste Sistemine katılım sağlamak üzere hazırlıklara başlayabilir. 
- Öİ sonrası gerçekleşen ödeme işlemleri gerçekleştiği ödeme sisteminin kurallarına tabidir.
- Bir ÖHS hem Alacaklı hem de Borçlu katılımcı olarak hizmet vermek zorundadır.
- Alacaklı ÖHS’lerin, Bölüm 4.2‘de yer alan kullanım modellerinden asgari “Sonra Kabul Hemen Öde” modelini Alacaklı’ya sunması zorunlu iken mümkünken, Borçlu ÖHS için tüm modelleri desteklemesi zorunludur. 
- Sistemdeki Öİ işlemleri arşivlenecektir.
- Öİ akışları, Havale veya FAST Sistemi ödemeleri için kullanılabilecektir. 
- Öİ ile gerçekleştirilecek işyeri ödemeleri, FAST İşyeri Ödemeleri kapsamında değerlendirilecek olup, üye işyeri ve takas komisyonu ile ilgili kurallar uygulanacaktır. 
- Alacaklı ve Borçlu’nun aynı ÖHS nezdindeki hesapları arasındaki (İng. “onus”) Öİ ve akabindeki ödeme (Havale) akışları farklılaşabilecek olsa da (örneğin; Ödeme İste ve FAST Sistemi mesaj yapıları yerine banka içi mesaj yapıları kullanılacaktır) bu belge kapsamındaki kurallar (doğrulama kuralları, kullanım modelleri, hizmet seviyeleri vb.) gözetilerek uygulanmalıdır.
- Öİ’nin başlatılabilmesi için gereken Borçlu bilgileri, Borçlu tarafından hesap bilgisi (Ad Soyad, IBAN) olarak paylaşılabileceği gibi TR Karekod veya Kolay Adres şeklinde de paylaşılabilir. 
- Öİ akışlarında kullanılan ilgili bilgilerin Borçlu ÖHS tarafından ödeme işleminin gerçekleştirileceği ödeme sistemine taşınması gerekmektedir.
- Katılımcılar, Müşterilerinden gelen ve Müşterilerine gitmesi gereken talep ve sonuçlara ilişkin anlık olarak bildirim yapmalıdır.
- Müşterilerin Borçlu olarak Öİ almama hakları bulunmakta olup, bu yönde tercihi bulunan Müşterilere Öİ sunulmaz. (Söz konusu tercihin güncellenebileceği araç/arayüzler müşterilere sunulmalıdır)
- Ödeme İste katman servisinin müşterilere sunulması için mobil kanalın kullanılması zorunlu olup diğer kanalların kullanımı ödeme hizmeti sağlayıcılarının tercihine bırakılmıştır. Mobil kanalda hizmet vermeyen katılımcıların web kanalında Ödeme İste katman servisini müşterilerine sunması gerekmektedir.
- Müşterilerin Öİ’ye karşılık verdikleri yanıtın içeriği, onların yasal yükümlülüklerini değiştirmez. Örneğin, fatura ödemesine ilişkin bir Öİ talebi alan Borçlu’nun olumsuz yanıt vermesi, onun faturayı ödeme yükümlülüğünü ortadan kaldırmaz.
- TR Karekod ile başlatılan ödeme iste akışlarının, FAST TR Karekod Teknik İlke ve Kurallar Rehberi’nde belirlenen zorunlu üretime geçiş tarihleri gözetilerek desteklenmesi gerekmektedir.
- Garantili Ödeme İste: Öİ mesajında yer alan Ödeme Garantisi Göstergesi (“OdemeGarantisiGostergesi”) alanının Alacaklı ÖHS tarafından kullanılması ve Borçlu ÖHS’nin bu talebe olumlu yanıt vermesi durumunda Borçlu ÖHS ile Alacaklı ÖHS arasında borç-alacak ilişkisi doğuran bir iş modeli kullanılabilir. Ödeme Garantisi Göstergesi bilgi olarak yer almakta olup, kullanımı katılımcılar arası ikili anlaşmalar gerektirmektedir. Bu anlaşmaların çerçevesi, Ödeme İste Sistemi kuralları kapsamında değildir.
- Müşteri halihazırda çevrim içi (mobil bankacılık, internet bankacılığı vb.) erişebilir durumda ise, ÖHS'nin varsa Ödeme İste kanal veya yetki tanımını varsayılan değeri AÇIK/KAPALI olacak şekilde sunması gerekmektedir.

## 3.2 RESTful API

API’ler, dünya ölçeğinde yaygın bir şekilde kullanılan Temsili Durum Transferi (Representational State Transfer, REST) mimari tarzı ve JavaScript Nesne Notasyonu (JavaScript Object Notation, JSON) veri formatlarına uygun olarak geliştirilir. En üst seviye Veri Tanımlama Dili (Data Description Language) ve en iyi uygulama örnekleri için [^JSON Şeması] temel alınır.

[^JSON Şeması]:  http://json-schema.org/  

İstek ve yanıt mesajlarında, isteğe bağlı veya koşullu bir alan, değer içermiyorsa, bu alan JSON payloadunda yer almamalıdır.

Örnek kod bloğu.
```
"alacakliBilgi":{
         "musteriTipi":"B",
         "ohsKod":"8000",
         "kimlik":  {
             "kimlikTipi": "K",
             "kimlikDegeri": "12345678900"
        },
        "hesap":    {
            "hesapNo": "TR800800G2BGNZ90MXSE96SW2",
            "hesapSahibi": "AHMET YILMAZ"
      }
      },
```

## 3.3.	Sürüm Yönetimi   

API sonraki aşamalarda doğabilecek gereksinimleri ve daha karmaşık kullanım durumlarını karşılamak için sürümler halinde geliştirilir ve bu durum tasarım sırasında göz önünde bulundurulur.   

Öİ API İlke ve Kuralları v1.0 sürümünde ;
-	İlk fazda Sonra Kabul Hemen Öde modeli olacaktır.

## 3.4.	Kaynak URI Yol Yapısı

ÖHS’lerin başlattığı çağrılarda URI yolu aşağıdaki yapıyı takip eder:

**[öhs-yol-ön-eki]/oi-api/[kaynak-grubu]/[sürüm]/ [kaynak]/[kaynak-no]**

**[öhs-yol-ön-eki]/oi-api/ois/s1.0/odeme-iste/odemeIsteNo**

Bu, aşağıdaki unsurlardan oluşur:

-	[öhs-yol-ön-eki]
İsteğe bağlı, ÖHS'ye özgü yol ön ekini ifade eder.
GEÇİT üzerinden yapılan çağrılarda BKM tarafından belirlenen sistem adı ve yol ön eki kullanılır.
-	ois, ois-api
Sabit metin “ois” (Ödeme İste Servisleri kısaltması)
-	[kaynak-grubu]
Kaynak grubu, API’ye erişmek için kullanılan ödeme hizmetine (HBH, ÖBH) göre erişim adresi (end point) grubunu tanımlar (“hbh” veya “obh”).
-	[sürüm]
API sürümünü ifade eder (“/s[ana-sürüm].[alt-sürüm]/”).
-	[kaynak]/[kaynak-no]
Kaynak detaylarını ifade eder.

ÖHS, tüm kaynakları için aynı katılımcı yolu ön ekini ve sistem adını kullanmalıdır. BKM API’lerine erişmek isteyen uygulamaların yetkilerine göre aşağıdaki API’ye abone olmaları gerekmektedir.
OIS (Ödeme İste Servisleri) :
-	https://xbank.com.tr/api-portal/oi-api/ois/s1.0/odeme-iste (ÖHS)
-	https://gecit.api-preprod.bkm.com.tr/oi-api/ois/s1.0/odeme-iste (BKM GEÇİT)

## 3.5.	Karakter Kodlama

API istekleri ve yanıtlarının **Başlık** parametrelerinde ISO-8859-1 standartında yer alan karakter kümesi kullanılmalıdır. 

API istekleri ve yanıtlarında **Gövde** parametrelerinde UTF-8 karakter kodlaması kullanılır. Bu, JSON için varsayılan karakter kodlamasıdır.

Ancak, bir ÖHS'nin kendi uygulamaları ve ödeme başlattığı ödeme sistemi (Havale vb.) bazı UTF-8 karakterlerini kabul etmeyebilir. ÖHS, UTF-8 kodlaması içeren bir mesajı işleyemez ve reddederse, HTTP 400 (Hatalı İstek) durum kodu ile yanıt vermelidir.

## 3.6.	Veri Formatı

-   Ödeme İste kapsamındaki zaman damgası, ISO 8601 standartına uygun olarak yerel saat bilgisini ve timezone bilgisini de içerecek şekilde " yyyy-MM-dd’T’HH:mm:ssXXX " formattaki haliyle hazırlanmalıdır.

Örnek:  "timestamp": "2021-05-30T20:34:15+03:00"  
yyyy : 4 hane yıl  
MM : Başa ‘0’ eklenmiş, toplam 2 hane ay  
dd    : Başa ‘0’ eklenmiş, toplam 2 hane gün  
HH    : Başa ‘0’ eklenmiş, toplam 2 hane saat (0-23 arası değer alabilir.)  
mm : Başa ‘0’ eklenmiş, toplam 2 hane dakika  
ss    : Başa ‘0’ eklenmiş, toplam 2 hane saniye  
XXX : ISO 8601 Time zone  


-	Zaman damgası hesaplamalarında, yeni günün başlangıç saatinin 00:00:00 olduğu kabul edilmiştir.
-	JWT veri paketlerinde kullanılan zaman damgaları, 1 Ocak 1970 Saat 00:00:00 (UTC) anından itibaren geçen saniye sayısı değerini (Unix Time) kullanmalıdır.
-	Bir ÖHS, tarihi yanlış biçimlendirilmiş bir istek aldığında, 400 (Hatalı İstek) durum kodu ve ilgili hata kodu ile yanıt vermelidir.
-	ISO 4217 Standartında para birimleri ve kaç basamak ondalık değer içerebilecekleri belirlenmiştir.
[https://www.iso.org/iso-4217-currency-codes.html](https://www.iso.org/iso-4217-currency-codes.html) adresinden ücretsiz olarak listeye erişilebilir.
API Standartlarında da para birimleri ISO 4217’de tanımlanmış olan 3 harfli kodlarla iletilir.
Örneğin; Ödeme İste API'sindeki "Tutar" alanı "100.25" ve "Para Birimi" alanı "TRY" olarak iletildiğinde 25 değerinin kuruş olduğu anlaşılmalıdır.
-	Sıralı veri tipleri büyük küçük harfe duyarlı olmalıdır.

## 3.7.	İstemci Sertifika Yönetimi

Öİ kapsamında ÖHS’lerin güvenli bir şekilde tanımlanması amacıyla elektronik sertifikalar kullanılır.

Öİ kapsamında tarafların güvenli bir şekilde tanımlaması, uçtan uca güvenli iletişim, mesaj şifreleme ve mesaj imzalama işlevleri 15/1/2004 tarihli ve 5070 sayılı Elektronik İmza Kanunu’nda açıklanan elektronik sertifikalar kullanılarak sağlanır. Elektronik sertifikada Türkiye Cumhuriyet Merkez Bankası tarafından verilen kuruluş kodu ve kuruluşun türüne dair bilgiler bulunur.

Tüm katılımcıların GEÇİT'e erişebilmesi için, BKM tarafından yapılan istemci sertifika doğrulamasından geçmesi gerekmektedir. İstemci sertifikası üretilmeden önce katılımcıların CSR üretme akışını tamamlaması gerekmektedir.

**OpenSSL ile CSR (Certificate Signing Request) Oluşturma**

Aşağıdaki komut ile 2048-bit RSA private key ve CSR oluşturulur.
openssl req -new -newkey rsa:2048 -nodes -keyout PRIVATEKEY.key -out CSR.csr
CSR ile ilgili detay bilgilerin girişinde;
Common Name (CN) olarak 4 karakterli ÖHS Kod(üye kodu) diğer alanlar için de kurum bilgileriniz ile giriş yapılır.

Tüm bilgilerin girilmesinden sonra oluşan private key dosyası kurumunuzda saklanır. CSR dosyası ise istemci sertifika üretmek üzere kullanılır. Bu aşamada takip edilmesi gereken adımlar şu şekildedir:

Katılımcıların, TRIP ortamı üzerinden, BKM Tarafından yetki verilmiş kullanıcılarının görebileceği "İstemci Sertifika Talebi" menü adımına giriş yapmaları beklenir. Açılan ekranda,"CSR Dosyası Yükleme" alanı içerisine, katılımcının üretmiş olduğu csr dosyası yüklenir. Yaklaşık 1 dakika içerisinde kuruma özel olarak üretilmiş olan client sertifikası indirilmeye hazır hale gelecektir. "İndir" butonu ile client sertifika indirilir. İstemci tarafında web isteğinin ilgili sertifika ile ilişkilendirilerek oluşturulması gerekmektedir. İstemci sertifikaları hem test hem de üretim ortamı için ayrı ayrı oluşturulup kullanılacaktır.

## 3.8.	Sunucu Sertifikaları

Sunucu sertifikalarının endpoint bilgisini (Fqdn) içerecek ve global bir Certification Authority tarafından imzalanmış olarak sunulması gerekmektedir. Örneğin; entegrasyon formu içerinde yer alan URL bilgisinin (test.xbank.com.tr) sertifika içerisinde tanımlı olması ve bu sertifikanın global bir CA örneğin Verisign tarafından imzalanmış olarak sunulması gerekmektedir.
ÖHS'ler tarafından sunucu sertifikaları uygulanmalıdır.


## 3.9. İstek/Cevap Mesajlarında Kullanılan Nesne Yapıları

İstek ve Cevap mesajlarında kullanılacak olan nesneler tüm elemanlarını kapsayacak şekilde TRİP uygulaması üzerinden swagger dokümanları ilerleyen zamanlarda yayınlanacaktır.

## 3.10. Mesaj İmzalama

Dijital imzalama yapısı, ÖHVPS API’de gerçekleştirilen işlemlerin ve taşınan verilerin bütünlük ve inkâr edilemezliğini sağlamak amacıyla kurgulanmıştır. İmzaların kaynak bazında hangi istek ve yanıtlara uygulandığı belirlidir.

API yalnızca TLS'ye dayanırsa, dijital kayıtları ve inkâr edilemezlik kanıtlarını tutmak zor olur. Bu nedenle, TLS'ye dayanmayan bir inkâr edilemezlik çözümü olarak API isteğinin HTTP başlığında bir JWS kullanılarak sağlanabilir.

HTTP isteğinin gövdesinin hash fonksiyonu (SHA256) ile özeti alınacaktır. Elde edilen özet, asimetrik anahtarları destekleyen bir algoritma kullanılarak imzalanacak ve JWS elde edilecektir.

Bu kapsamda imzalama akışı aşağıdaki gibi olmalıdır:

-	ÖHS öncelikle özel ve açık anahtarlarını oluşturmalıdır. Bu anahtarları oluşturmak için aşağıda “openssl” kullanılarak oluşturma örneği paylaşılmıştır. Bu anahtarlardan özel olan anahtar mesajı imzalamak için kullanılacak olup, açık anahtar ise mesajı doğrulamak amacıyla mesajın alıcısı tarafından kullanılacaktır.

private_key.pem ve public_key.pem dosyasinin içerikleri kod tarafında kullanılacaktır.
--private.pem => Özel anahtarın ismi openssl genrsa -out private.pem 2048
--public_key.pem => Açık anahtarın ismi openssl rsa -in private.pem -pubout -outform PEM -out public_key.pem
--private_key.pem => Özel anahtarın PCKS8 formatına çevrilmesi (Java açısından PCKS8 formatında olma ihtiyacı nedeniyle) openssl pkcs8 -topk8 -inform PEM -in private.pem -out private_key.pem –nocrypt

-	Açık ve Özel anahtarlar oluşturulduktan sonra Açık Anahtar BKM ile paylaşılır. BKM bu açık anahtarı diğer katılımcıların ulaşabilmesi ve alabilmesi için bir Anahtar Deposu yaklaşımı ile bünyesinde tutar. İlgili anahtarı iletebilmek ve alabilmek için kullanılacak OHS API’ye erişim detayları 3.16.OHS API içerisinde detaylı olarak paylaşılmıştır. Eğer kurumun ilgili anahtar çiftinin yenilenme durumu söz konusu ise yenilemenin hemen ardından açık anahtar yeni bir imzalama yapılmadan önce mutlaka BKM ile paylaşılmalıdır.

-	İmzalı mesajı açacak olan kurum mesajı imzalayan kurumun açık anahtarını her sorguda yeniden almak durumunda değildir. Belirli periyodlarda kendi ortamındaki anahtarı yenileyerek sistemi işletebilir. Ancak imzalayan kurum anahtar çifti yenilemesi yaptığında BKM ile açık anahtarını paylaşsa dahi imzalı mesajı doğrulayacak taraf eski açık anahtar ile doğrulama yapmaya çalıştığı için hata alacaktır. Bu ilk hata durumunda hızlıca BKM üzerinden yeni anahtarı alıp mesajı tekrar doğrulamayı denemelidir. Eğer yine hata alıyor ise doğrulama işlemini hata statüsüne almalıdır. Bu sebeple anahtar yenileyen kurum yeni açık anahtarını yeni bir mesaj imzalama yapmadan önce mutlaka BKM ile paylaşmalıdır.

**İmzalama Kuralları (İsteği Başlatan ÖHS)**

ÖHS üzerinden başlayan akış örnek olarak paylaşılmıştır.

-	İsteği başlatan ÖHS, mesaj imzalama gerektiren her API isteğinin HTTP gövdesini (request body) kendi özel anahtarı ile şifreleyerek imza bilgisini oluşturur.
-	Ardından bu imza verisini, göndereceği mesajın istek başlığında yer alan X-JWS-Signature alanında göndermelidir.
-	X-JWS-Signature alanında gönderilecek olan bilgi aşağıdaki yöntem ile oluşturulmalıdır.
    1.	Bu alana yazılacak olan bilgi JWT formatında oluşturulmalıdır.
    2.	Bir JWT, header-payload-signature alanlarından oluşmaktadır.
	    - Header alanında JWT’yi imzalamak için kullanılacak algoritma belirtilmelidir. Standartlar kapsamında RS256 kullanılacaktır.
        - Payload kısmında özel olarak oluşturulacak olan “body” claim alanına istek gövdesi (request body) verisinin SHA256 hash değeri karşılığı yazılmalıdır.
	    - JSON payload oluşturulurken RFC 7519 baz alınmalıdır. "iss" (Issuer) Claim, "exp" (Expiration Time) Claim, "iat" (Issued At) Claim, “body” Claim alanlarının gönderilmesi zorunludur.[^RFC7519](https://datatracker.ietf.org/doc/html/rfc7519#section-4)

            a. "iss" (Issuer) Claim : Kurumunuza özel bilgidir.

            b. "exp" (Expiration Time) Claim: Saniye cinsinden (Unix time) imzanın son geçerli olduğu tarih. Bu tarih mevcut sunucu saatinizden 60 dakika sonra olacak şekilde kullanılmalıdır.

            c. "iat" (Issued At) Claim : Saniye cinsinden (Unix time) imzanın oluşturulduğu tarih. Bu tarih mevcut sunucu saatinizden 5 dakika önce olacak şekilde kullanılmalıdır.

            d. “body” Claim : istek gövdesi (request body) verisinin SHA256 hash değeri karşılığı.
        - Signature alanında da özel anahtar ile imzalanmış olan imza içeriği yer alacaktır.



**X-JWS-Signature**: JWS imzasını içeren üstbilgi. Bu başlığın ne zaman belirtilmesi gerektiği hususu ilgili endpoint için belirtilmiştir.

**Örnek X-JWS-Signature Payload Değeri**

{
"iss": "https://xbank.com.tr",
"exp": 1646832405,
"iat": 1646746005,
"body": "c543072f97a761a1d891dc81acc380bc1e6f61ca6541bd93ebfdece338457922"
}

-	İstek gönderilir. Sadece mesajın bütünlüğünü ve doğruluğunu teyit amacı ile istek gövdesi (request body) SHA256 hash değeri imzalanarak X-JWS-Signature alanında bu imza iletilir. İsteğin gövde (request body) kısmı açık ve şifresiz olarak gönderilmektedir.

-	İsteği alan ÖHS, talebi gerçekleştirmeden önce aldığı API isteklerinin imzasını doğrulamalıdır. X-JWS-Signature alanındaki JWT aşağıdaki adımlarla doğrulanmalıdır.

    1. Header kısmındaki algoritmanin RS256 olduğu kontrol edilir.
    2. Gönderen katılımcının açık anahtarı ile JWT verify (doğrulama) işlemi yapılır.
    3. Yukarıdaki işlemlerin doğruluğunun ardından JWT’nin payload kısmındaki “body” claim alanındaki bilginin, isteğin gövde verisinin SHA256 hash değerlerinin aynı olduğu kontrol edilir.
    4. Örnek checksum değeri
        "a64b19f95eeb1fb0a0a3e2dbbc6e3d8472c52184d4543417ddc6d156fc5c5571" veya
        "A64B19F95EEB1FB0A0A3E2DBBC6E3D8472C52184D4543417DDC6D156FC5C5571" şeklinde olabilir. İki hali de aynı değere sahiptir.     Kontrollerde buna dikkat edilmesi gerekmektedir.

-	Yukarıdaki işlemler ile doğruluğu teyit edilmiş olan isteğin talebi gerçekleştirir.
-	Eğer istek doğrulanamıyor ise gönderen kurumun açık ve özel anahtar çifti yenilenmiş olabilir.
-	BKM OHS API üzerinden ilgili kurumun bilgilerini (kurum kodu vs) kullanarak kurumun detay bilgileri çeker ve kendi ortamında yeniler.
-	Ardından imzayı tekrar açık anahtar ile doğrulayarak kontroller gerçekleştirilir. (Eğer halen doğrulama işlemi başarısız ise bu istek için hata akışı çalıştırılır. **TR.OIS.Resource.InvalidSignature** kodu ile hata üretilebilir.)
-	İmza bilgisinin beklendiği (x-jws-signature) servislerde, bu bilginin iletilmediği durumlarda **TR.OIS.Resource.MissingSignature** hatası üretilebilir.
-	İsteği alan ÖHS ; isteği işledikten sonra cevabı oluştururken de yukarıdaki akışlar ile göndereceği cevabı imzalamalıdır.
-	İstek yanıt gövdesinin SHA256 checksum değeri için hexadecimal çıktı kullanılacaktır. Oluşacak çıktının 64 karakter olması beklenmektedir. Kontrol için "^[A-Fa-f0-9]{64}$" RegEx tarifini kullanabilirsiniz.

**Anahtar Deposu**

ÖHS'ler tarafından güvenilen bir Güven Otoritesi (Trust Anchor), taraflar için bir genel anahtar deposu sağlamaktan sorumludur.
Güven Otoritesi, taraflardan herhangi birisinin oluşturduğu bir anahtar çiftinin açık bölümünü saklayan merkezi bir dizin (BKM tarafından tutulan merkezi kayıt sistemi vb.) olacaktır.
Mesajları doğrulamak için tarafların açık anahtarlarının paylaşılması için BKM bir servis sağlayacaktır. HHS API olarak adlandırılımış olan bu servis ile ÖHS listesine ulaşılabildiği gibi doğrulama işlemi için ihtiyaç duyulacak olan açık anahtarlara da bu servis üzerinden erişilebilinecektir.

## 3.11. Durum Kodu

API’ler, iki farklı amaca hizmet eden iki durum kodu kullanır:

- HTTP Durum Kodu, API çağrısının (kaynaktaki HTTP işlemi) sonucunu yansıtır.
- Bazı kaynak payload’larındaki Durum alanı, kaynakların durumunu yansıtır.

## 3.12. Gereksinimlerinin Sınıflandırılması

Erişim adreslerinin ve alanların kullanımı Zorunlu(Z), İsteğe Bağlı(İ), Koşullu(K), Yok(N/A) olabilir. Kullanımlara ilişkin durumlar ve kullanımın (K) koşullu olduğu duruma ilişkin açıklamalar ilgili tablolarda belirtilmiştir.

Öİ API'lerinin istek ve yanıtta kullanılacak başlık isimleri, ilgili RFC dokümanlarında ve aşağıdaki tabloda yer aldığı şekilde kullanılacaktır. Uygulamaya özelleşmiş başlıklar "X-" ile başlayacaktır. Başlık isimlerinde yer alacak kısaltmalar tamamı büyük harfle yazılacak şekilde tanımlanacaktır. Başlık isimleri büyük – küçük harfe duyarlı olmamalıdır. Örneğin x-request-id ya da X-Request-ID olarak gönderilmiş olan bir istek başlığı değişkeni, sunucu tarafında hata vermeyecek şekilde işlenebilmelidir.

## 3.13. İstek Başlığı

-	"Başlık isimleri" yorumlanırken küçük büyük harfe duyarlı olmamalıdır. Örneğin "x-ReQuEsT-Id"         geçerli bir başlık ismidir.
-	"Başlık değerleri" yorumlanırken ise küçük büyük harf duyarlılığı olmalıdır. Örneğin "xyz123" ile "XYZ123" değerleri farklıdır.
-	Başlık değerlerinde ISO-8859-1 standartında yer alan karakter kümesi kullanılmalıdır. Örneğin "X-Request-Id" değerinde "İOS12" yazmak, büyük "İ" harfinin ISO-8859-1 içerisinde yer almamasından dolayı, hataya yol açacaktır.
-	İstek ve Yanıt başlığında yer alan alanların; POST GET DELETE methodlarında, Zorunlu/Koşullu/İsteğe Bağlı/Yok kullanım durumları aşağıdaki tabloda listelenmiştir.

**Tablo 2: İstek Başlığında Yer Alan Veriler**
|Başlık İsimleri |Format |Notlar |POST |GET |DELETE |
| --- | --- | --- | --- | --- | --- |
|X-Request-ID  | AN1..36 | İsteği başlatan ÖHS tarafından belirlenen çağrıya özgü talep kimliği. İstek numarası. <br> Örnek: Ödeme iste talebi iş akışının her adımında farklı “x-request-id” değeri kullanılır. <br> Çağrıların aynı yanıtı dönmesinin beklendiği durumlarda (idempotent işlemlerde) aynı değer ile çağrı yapılır.   | Z |Z |Z  |
|Content-Type | AN1..20| Standart HTTP Başlığı; Talepte sağlanan payload’ın biçimini temsil eder. Bu değerin application/json olarak gönderilmesi gerekmektedir.<br> (Başka bir değere ayarlanırsa, ÖHS, 415 Desteklenmeyen Ortam Türü (Unsupported Media Type) ile yanıt vermelidir)|Z|-|-|
|X-Recipient-Code |AN4| Alacaklı ÖHS Kod bilgisidir. |Z |Z|Z| 
|X-Sender-Code|AN4|Borçlu ÖHS Kod bilgisidir.	|Z|Z|Z|
|Authorization|AN1..4096|Katılımcı ile GEÇİT arasındaki otorizasyon için kullanılan token bilgisidir.	|Z|Z|Z|
|X-JWS-Signature|AN1..4096|HTTP isteğinin gövdesinin hash fonksiyonu (SHA256) ile özeti alınacaktır. Elde edilen özet, asimetrik anahtarları destekleyen bir algoritma kullanılarak imzalanacak ve JWS elde edilecektir.Bu başlığın ne zaman belirtilmesi gerektiği hususu ilgili endpoint için imzalama türü başlığında İmzalı İstek olarak belirtilmiştir.	|Z|Z|Z|

## 3.14. Yanıt Başlığı

-	"Başlık isimleri" yorumlanırken küçük büyük harfe duyarlı olmamalıdır. Örneğin "x-ReQuEsT-Id" geçerli bir başlık ismidir.
-	"Başlık değerleri" yorumlanırken ise küçük büyük harf duyarlılığı olmalıdır. Örneğin "xyz123" ile "XYZ123" değerleri farklıdır.
-	 Başlık değerlerinde ISO-8859-1 standartında yer alan karakter kümesi kullanılmalıdır. Örneğin "X-Request-Id" değerinde "İOS12"  
    yazmak, büyük "İ" harfinin ISO-8859-1 içerisinde yer almamasından dolayı, hataya yol açacaktır.

**Tablo 3: Yanıt Başlığında Yer Alan Veriler**
|Başlık İsimleri |Format |Notlar |POST |GET |DELETE |
| --- | --- | --- | --- | --- | --- |
|X-Request-ID  | AN1..36 | İsteği başlatan ÖHS tarafından belirlenen çağrıya özgü talep kimliği. İstek numarası. <br> Örnek: Ödeme iste talebi iş akışının her adımında farklı “x-request-id” değeri kullanılır. <br> Çağrıların aynı yanıtı dönmesinin beklendiği durumlarda (idempotent işlemlerde) aynı değer ile çağrı yapılır. <br> **İlgili istek başlığındaki bilgi geri dönülür.**   | Z |Z |Z  |
|Content-Type | AN1..20| Standart HTTP Başlığı; Talepte sağlanan payload’ın biçimini temsil eder. Bu değerin application/json olarak gönderilmesi gerekmektedir.<br> (Başka bir değere ayarlanırsa, ÖHS, 415 Desteklenmeyen Ortam Türü (Unsupported Media Type) ile yanıt vermelidir)|Z|-|-|
|X-Recipient-Code |AN4| Alacaklı ÖHS Kod bilgisidir. <br> **İlgili istek başlığındaki bilgi geri dönülür.**  |Z |Z|Z| 
|X-Sender-Code|AN4|Borçlu ÖHS Kod bilgisidir. <br> **İlgili istek başlığındaki bilgi geri dönülür.**	|Z|Z|Z|
|X-JWS-Signature|AN1..4096|HTTP yanıtının gövdesinin hash fonksiyonu (SHA256) ile özeti alınacaktır. Elde edilen özet, asimetrik anahtarları destekleyen bir algoritma kullanılarak imzalanacak ve JWS elde edilecektir.Bu başlığın ne zaman belirtilmesi gerektiği hususu ilgili endpoint için imzalama türü başlığında İmzalı Yanıt olarak belirtilmiştir.	|Z|Z|Z|

## 3.15. Idempotency Kuralları

İsteği yapan ÖHS’nin aşağıdaki durumlarda aynı istek numarası (x-request-id) ve aynı veri gövdesiyle çağrıyı tekrarlaması; isteği alan ÖHS’nin de bu durumlarda aynı yanıtı dönmesi gereklidir.
-	İsteği alan ÖHS’nin yanıtı kesinti/arıza nedeniyle isteği yapan ÖHS’ye ulaşmaması ve zaman aşımı söz konusu olması,
-	Müşteri, ÖHS uygulaması üzerinden çift tıklama ile mükerrer şekilde OI API’lerini çağırması, (API kontrollerinden önce ÖHS uygulamasının, çift tıklama kontrolü yapması önerilmektedir.)
-	İsteği yapan ÖHS, yanıt almasına rağmen işleyemeden kaybetmesi,

durumlarında isteği alan ÖHS aşağıdaki kuralları işletir:

-	ÖHS gelen istek numarasını ve veri gövdesini birleştirerek checksum değeri üretir.
chesksum değeri x-request-id|request.body ‘nin hash algoritmalarından (CRC32,MD5 vb) geçirilerek üretilebilir.
-	İsteği alan ÖHS bu checksum değeri ile isteği yapan ÖHS’ye dönmüş olduğu yanıtı 5 dk boyunca saklar. Saklama yöntemi olarak veri tabanı veya önbellek araçları kullanılabilir.
-	İsteği yapan ÖHS aynı istek numarası ve aynı veri gövdesi ile yeni bir çağrı yaptığında, aynı checksum değeri üretileceği için 5dk boyunca bu değere karşılık gelen yanıtı döner.
-	5 dk sonrasında istek numarası veya veri gövdesi değişmemiş olsa dahi bu isteği alan ÖHS tarafından yeni istek olarak kabul edilir.

Aşağıdaki Post işlemleri için bu kural setinin işletilmesi gerekmektedir:

 1- POST /odeme-iste

## 3.16. HTTP Durum Kodları

RFC 2616'da belirlenmiş olan durum kodları (status code) gönderilen isteğin durumunu  standart bir şekilde ifade eder. Eğer bir hata varsa hatayı, gönderilen istek başarılı bir şekilde işlem gördüyse ona ilişkin durumu aktarır. Durum kodları genel olarak 5 kategoridedir.
-	1xx Bilgi
-	2xx Başarılı
-	3xx Yönlendirme
-	4xx İstemci Hatası
-	5xx Sunucu Hatası

**errorCode Alanında Kullanılabilecek Sıralı Hata Tipleri :**

>**TR.OIS.Resource**
>>**&#8680;	InvalidFormat**    
>>**&#8680;	NotFound**  
>>**&#8680;	InvalidSignature**  
>>**&#8680;	MissingSignature**  
>>**&#8680;	MethodNotAllowed**  
>>**&#8680;	NotAcceptable**  
>>**&#8680;	UnsupportedMediaType**  

>**TR.OIS.Business**  
>>**&#8680;	InvalidContent**   
>>**&#8680;	InvalidAccount**

>**TR.OIS.Connection** 
>>**&#8680;	InvalidCertificate**  
>>**&#8680;	InvalidSender**  
>>**&#8680;	InvalidRecipient**  

>**TR.OIS.Server**  
>>**&#8680;	InternalError**  
>>**&#8680;	ServiceUnavailable**

TR.OIS.Resource.InvalidFormat hatası alındığı durumda; fieldErrors nesnesi içerisinde verilecek hata kodları : 

>**TR.OIS.Field**	  
>>**&#8680;	Missing**   
>>**&#8680;	Invalid**  

**Tablo 4: HTTP Durum Kodları**

|HTTP Durum |İstek Sonucu ve Açıklamalar |POST |GET|DELETE |
| --- | --- | --- | --- | --- |
| 200 OK | **İstek Başarıyla Tamamlandı.**<br>Kaynak güncellemek için yapılan (örneğin, GET) ve başarıyla tamamlanan isteklerinde kullanılır.  | H | E | H |
| 201 Created | **İstek Başarılı Oldu.**<br>Kaynak yaratma isteği (örneğin, POST /odeme-iste) başarıyla sonuçlandı. | E | H | H |
| 204 No Content | **Silme işlemi başarıyla tamamlandı.**<br>Kaynak silme isteği (örneğin, **DELETE/odeme-iste/{odemeIsteNo}**) başarıyla sonuçlandı. | H | H | E |
| 400 Bad Request | **İstekte bozuk, eksik veya uyumlu olmayan JSON gövdesi, URL parametreleri veya başlık alanları var.** İstekle başlatılan işlem yapısal bozukluk, eksik veya tutarsız veri veya HHS tarafındaki kontrollerin hatalı sonuçlanması nedeniyle hata ile sonuçlanır ve hataya ilişkin veriler hata nesnesi içerisinde dönülür. | E | E | E |
| 401 Unauthorized | **Yetkilendirme başlığı eksik, hatalı veya geçersiz olduğundan istek yetkilendirilmediğinde ve erişim reddedildiğinde http 401 kodu dönülmelidir.**| E | E | E |
| 404 Not Found | **ÖHS geçerli bir API erişim adresini sağlamıyorsa, o URL'ye gelen istekler için 404 (Bulunamadı) ile yanıt vermelidir.**Uygulama esaslarında tanımlanmayan bir kaynak için bir URL'ye erişmeye çalışırsa (örneğin, GET /yurtdisi-odeme-iste), ÖHS, 404 (Bulunamadı) ile yanıt vermeyi seçebilir.| E | E | E |
| 405 Method Not Allowed | **İsteği başlatan ÖHS, desteklenmeyen bir yöntemle kaynağa erişmeye çalıştı.**| E | E | E |
| 406 Not Acceptable | **İstek, geçersiz bir karakter kümesi içeriyor.**| E | E | E |
| 415 Unsupported Media Type | **İstek gövdesi hedef kaynakta bu yöntem tarafından desteklenmeyen bir biçimde oluşturulduğu için işlem reddedildi**| E | H | H |
| 500 Internal Server Error | **API sunucu / servis katmanında sorun oluştu. İşlem başarısız.**<br> 5XX hata durumlarında yanıt gövde değeri olmadığı için mesaj imzalama yapılamaz ve x-jws-signature alanı boş olarak iletilir.<br> Bu durumda x-jws-signature kontrolü yapılmamalıdır.| E | E | E |
| 503 Service Unavailable | Hizmet sürümü kullanımdan kaldırıldı veya hizmet verilemiyor durumu. | E | E | E |

## 3.17. OHS API

**GET /ohs/{ohsKod}**

-	https://gecit.api-preprod.bkm.com.tr/ohs-api/s1.0/ohs (BKM GEÇİT)
-	https://gecit.api-preprod.bkm.com.tr/ohs-api/s1.0/ohs/1234 (BKM GEÇİT)

İşlem Sorgu Örneği = /ohs ⇨ bu sorgu yöntemi ile tüm ÖHS’lerin dizi şeklinde verileri listelenir.
İşlem Sorgu Örneği = /ohs/1234 ⇨ bu sorgu yöntemi ile gönderilmiş olan ÖHS kodu’na ait bilgiler listelenir. Ya da “404 Not Found” hatası alır.

**Tablo 5: ÖHS Bilgileri Sorgulama Yanıtı “OHS” nesnesi**

|Alan Adı |Parametre Adı |Format |Zorunlu/Koşullu/İsteğe bağlı|Açıklama |
| --- | --- | --- | --- | --- |
|ÖHS Kodu	|kod	|AN4|	Z	|ÖHS'nin kod bilgisi|
|ÖHS Unvanı	|unv	|AN3..140|	Z	|ÖHS'nin unvan bilgisi|
|ÖHS Markası	|marka	|AN1..140|	Z	|ÖHS'nin kod bilgisi|
|ÖHS Kodu	|kod	|AN4|	Z	|Müşterinin kolaylıkla algılayabileceği kısa unvan bilgisi. ÖHS tarafından belirlenecektir.|
|Açık Anahtar	|acikAnahtar	|AN1..1024|	Z	|ÖHS’nin mesaj imzalama için paylaştığı açık anahtar|
|ÖHS Api Bilgileri	|apiBilgileri	|Kompleks: OhsApiBilgi[Array][0..N]|	Z	|Desteklenen Api ve sürüm bilgileri dönülecektir.|
| > api	|api	|AN1..20|	Z	|Api İsmi Örnek :ois
| > surum	|surum	|AN1..10|	Z	|Api Sürüm Kodu Örnek: s1.0, s2.0 s1.0|
|Logo Bilgileri	|logoBilgileri	|Kompleks: LogoBilgisi [Array][1..N]|	Z	|ÖHS'ye ait logo bilgileri.|
| > logoTur	|logoTur	|AN3..50|	Z	|Logonun türünü belirler. TR.OIS.DataCode.LogoTur sıralı veri türü değerlerlerinden birini alır.
| > logoAdr	|logoAdr	|AN1..255|	Z	|ÖHS tarafında tutulan ve paylaşılacak olan url adres bilgisidir.Örnek: https://via.placeholder.com/150?text=0001 
| > logoArkaPlan	|logoArkaPlan	|AN1|	Z	|TR.OIS.DataCode.LogoArkaPlan sıralı veri türü değerlerlerinden birini alır.
| > logoFormat	|logoFormat	|AN3|	Z	|TR.OIS.DataCode.LogoFormat sıralı veri türü değerlerlerinden birini alır.
|Durum	|durum	|AN1|	Z	|ÖHS'nin durum bilgisidir.TR.OIS.DataCode.OHSDurumu sıralı veri tipinde alabileceği değerler belirtilmiştir.|

ÖHS API'de; Açık, Yaygınlaştırma, Geçici Hizmet Veremiyor, Kapalı durumlarındaki ÖHS'ler listelenecektir.

Sertifikasyon onayı alan ÖHS'ler, üretim ortamına geçişte "Yaygınlaştırma" durumuna sahip olabilir. ÖHS'nin, diğer ÖHS'ler ile "Yaygınlaştırma" kontrollerini yapacağı, kendi yönetiminde olacaktır. Böylece Üretim Ortamında ÖHS’nin kendisi tarafından tanımlanmış kısıtlı müşteriye hizmet vermesi ve servislerini test etmesi sağlanabilir olacaktır. ÖHS’ler kendi kurum kontrollerini yapana kadar, "Yaygınlaştırma" durumunda kalabilirler. ÖHS'nin BKM'ye yapacağı talep ile, ÖHS "Yaygınlaştırma" durumundan "Açık" durumuna geçebilecektir.

Aşağıdaki durumlarda ÖHS'nin statüsü Geçici Kapalı olarak güncellenebilecektir:

-	ÖHS'nin talebi ile uzun süreli (minimum 1 saati aşan) yaşanan teknik sorunlarda G statüsüne alınabilecektir. G statüsüne alınma talebinin ÖHS tarafından odemeiste@bkm.com.tr ye mail atarak iletilmesi beklenmektedir.
-	İlgili resmi kurumlardan gelen talep üzerine ÖHS G statüsüne alınabilir.

ÖHS’ler için geçerli olacak; logo gönderiminde dikkat edilmesi gerekenler şu şekilde tariflenmiştir:

1.	Logoların ham dosya yerine kurumun yayınlayacağı bir URL üzerinden sunulması gerekmektedir. (Örn: logoURL = https://kurumadi.com.tr/logo.png) Logo BKM tarafında host edilmeyecektir.
2.	Logo url’in public erişilebilir url olması gereklidir.
3.	Logo, yatayda veya dikeyde taşma paysız tam oturacak, sınır boyutlarını geçmeyecek ve ortalanmış yerleşime sahip olmalıdır.
4.	ÖHS uygulamasında gösterim esnasında logoların hızlı yüklenmesi ve düşük veri tüketmesi açısından; logo boyutu 250 KB’ın altında olmalıdır.
5.	ÖHS’lerin tüm logo türlerini (8 farklı tipte logoyu) zorunlu olarak dönmesi beklenmektedir.
6.	Circle logo kullanılması gerektiğinde ICON_LOGO logo türü kullanılmalıdır.
7.	Logolarını güncellemek isteyen kurumların en az 3 iş günü öncesinde BKM’ye bu değişikliği GEÇİT Test/Üretim Ortamı Entegrasyon formu ile bildirmesi gereklidir. BKM de katılımcılara ÖHS API aracılığı ile güncel logonun çekilmesi gerektiğine dair bilgilendirme yapar.
8.	Logoları anlık çeken katılımcıların, herhangi bir teknik nedenden dolayı güncel logoyu alamadığı durum olabilir. Bu durumda sistemlerine kaydetmiş olduğu kuruma ait ikon logoyu göstermesi gereklidir.
9.	ÖHS’ler API aracılığı ile almış oldukları logoların formatı üzerinde değişiklik (kare, yuvarlak hale getirip resize etmek gibi) yapabilirler. Ancak logonun görsel ve yazılarını etkileyecek bir değişiklik yapmamalıdırlar.
10.	ÖHS mobil uygulamasındaki dark mode ve light mode kullanımlarında, hangi logonun kullanılacağına uygulama sahibi karar verecektir.


## 3.18. Sıralı Veri Türleri

**Tablo 6: Sıralı Veri Türleri**

|**Kod** |**Açıklama** |
| --- | --- |
|TR.OIS.DataCode.MusteriTip	| B: Bireysel <br>K: Kurumsal |
|TR.OIS.DataCode.KimlikTur	| Kod, Tip, Format <br>K , TCKN , N11 <br>V, VKN, AN10 <br>Y , YKN , N11 <br>P , PNO , AN7..9|
| TR.OIS.DataCode.OdemeAmaci | Ödemenin Amacına yönelik olarak aşağıdaki değerlerden birini alır:<br>01: Konut Kirası Ödemesi<br>02: İş yeri Kirası Ödemesi<br>03: Diğer Kira Ödemesi<br>04: E-Ticaret Ödemesi: Elektronik ticaret işlem amaçlı aktarımlar<br>05: Çalışan Ödemesi: Maaş, harcırah, prim gibi çalışan ödemeleri<br>06: Ticari ödeme: Ticari işletmelerin birbirlerine, kendi hesaplarına veya müşterilerine ödemeleri, borç, ithalat, ihracat, şirket satın alma, vb. kapsamında ödemeler<br>07: Bireysel Ödeme: Özel amaçlı (aile bireylerine, hediye, bağış, borç, alışveriş vs.) ödemeler<br>08: Yatırım: Mevduat, menkul kıymet, döviz, gayrı menkul, taşıt, varlık alımı, temettü ödeme, tahsilat vb. gibi yatırım amaçlı ödemeler<br>09: Finansal: Kredi, depo, repo, türev, finansal varlık alım/satımı vb. ödemeler<br>10: Eğitim ödemesi<br>11: Aidat ödemesi |
|TR.OIS.DataCode.AkisTur	| 01: Kişiden Kişiye Ödemeler|
|TR.OIS.DataCode.OHSDurumu | A : Açık. Üretim Ortamında ÖHS’nin aktif bir şekilde hizmet vermesi durumu.<br> Y : Yaygınlaştırma. Üretim Ortamında ÖHS’nin kendisi tarafından tanımlanmış kısıtlı müşteriye hizmet vermesi durumu. <br>  G : Geçici Hizmet Veremiyor. ÖHS servislerinde teknik bir sorun olması nedeniyle ÖHS’nin hizmet verememesi durumu. <br>K: Kapalı. ÖHS’nin hizmet vermeme durumu. |
| TR.OIS.DataCode.OdemeIsteDurumu | B: Yanıt Bekleniyor<br>K: Kabul Edildi<br>O: Ödeme Sistemine Emir İletildi<br> I: İptal Edildi |
| TR.OIS.DataCode.OdemeIsteIptDtyKod | ‘01’ :Borçlu Ödeme İsteğini Reddetti<br>‘02’ :Borçlu Beklenen Sürede Ödeme İsteğine Yanıt Vermedi<br>‘03’ :Borçlu İptal Etti<br>‘04’ :Beklenen Sürede Ödeme Sistemine Emir İletilmedi<br>‘05’ :Borçlu ÖHS Fraud Nedeniyle İptal Etti<br>‘06’ :Alacaklının Ödeme İste Yetkisinin Kapalı Olması<br>‘07’ :Alacaklı Ödeme İste Talebinden B Statüsünde Vazgeçti<br>‘08’ :Alacaklı Ödeme İste Talebinden K Statüsünde Vazgeçti<br>‘09’ :Alacaklı Ödeme İste Talebinden K Statüsünde Vazgeçti<br>‘10’ : Müşteri ÖHS kontrollerini Aşamadı<br>‘99’ : Diğer<br>|
|TR.OIS.DataCode.EvetHayir	| E: Evet <br>H: Hayır |
|TR.OIS.DataCode.LogoArkaPlan	| B : Logoların arka planının beyaz olması (Erkek Logo) <br>K : Logoların arka planının renkli/koyu olması (Dişi Logo) |
|TR.OIS.DataCode.LogoFormat	| SVG : Logonun svg formatında olmasını ifade eder. Logonun 1:2 oranında olması gerekmektedir. <br>PNG : Logonun png formatında olmasını ifade eder. Logonun 500 X 1000 px olması gerekmektedir. |
|TR.OIS.DataCode.LogoTur	| FULL_LOGO : Yazı ve ikon şekillerin bir arada olduğu logo <br>ICON_LOGO : İkon şekillerin olduğu ( Sadece görsel olan-yazısız ) logo |