

# 3. Temel Prensipler <!-- omit in toc -->

Bu bölümde Ödeme İste Servisleri için tanımlanan temel prensipler açıklanmaktadır.  

Öİ Kurumsal API üretim ortamına alınmadan önce BKM'ye bilgi verilmesi ve iş modeli(usecase) onayı alınması zorunludur. Kurumsal API hizmeti verecek katılımcıların işyerleri ile paylaştıkları entegrasyon vb dokümanlarını BKM ile paylaşması zorunludur.

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
- Alacaklı ÖHS’lerin, kullanım modellerinden asgari “Sonra Kabul Hemen Öde” modelini Alacaklı’ya sunması zorunlu iken, Borçlu ÖHS için tüm modelleri desteklemesi zorunludur. Diğer taraftan, Alacaklı ve Borçlu katılımcıların tüm modelleri ve fonksiyonları teknik olarak desteklemesi gerekmektedir. 
- Sürüm güncellemelerinde API desenine eklenen yeni alanların tüm katılımcılar tarafından desteklenmesi zorunludur.
- Sistemdeki Öİ işlemleri arşivlenecektir.
- Öİ akışları, Havale veya FAST Sistemi ödemeleri için kullanılabilecektir.FAST sistemi üzerinden yapılacak ödemeler için FAST limitleri geçerli olacaktır. FAST ve Havale için sadece TL transfer gerçekleştirilebilir.
- Öİ ile gerçekleştirilecek işyeri ödemeleri, FAST İşyeri Ödemeleri kapsamında değerlendirilecek olup, üye işyeri ve takas komisyonu ile ilgili kurallar uygulanacaktır. 
- Alacaklı ve Borçlu’nun aynı ÖHS nezdindeki hesapları arasındaki (İng. “onus”) Öİ ve akabindeki ödeme (Havale) akışları farklılaşabilecek olsa da (örneğin; Ödeme İste ve FAST Sistemi mesaj yapıları yerine banka içi mesaj yapıları kullanılacaktır) bu belge kapsamındaki kurallar (doğrulama kuralları, kullanım modelleri, hizmet seviyeleri vb.) gözetilerek uygulanmalıdır.
- Öİ’nin başlatılabilmesi için gereken Borçlu bilgileri, Borçlu tarafından hesap bilgisi (Ad Soyad, IBAN) olarak paylaşılabileceği gibi TR Karekod veya Kolay Adres şeklinde de paylaşılabilir. 
- Öİ akışlarında kullanılan ilgili bilgilerin Borçlu ÖHS tarafından ödeme işleminin gerçekleştirileceği ödeme sistemine taşınması gerekmektedir.
- Katılımcılar, Müşterilerinden gelen ve Müşterilerine gitmesi gereken talep ve sonuçlara ilişkin anlık olarak bildirim yapmalıdır.Anlık bildirimler ÖHS tarafından iletilecek SMS ya da push notifikasyon olabilir. Müşterinin iletişim tercihi birincil iletişim kanalı olmak üzere en azından SMS ile bilgilendirme yapılması beklenmektedir. 
- Alacaklı ÖHS olarak borçlu ÖHS'den kabul ya da red durum değişikliği bildirimi geldiğinde Alacaklı ÖHS'nin müşterisini bilgilendirmesi zorunludur.
- Müşterilerin Borçlu olarak Öİ almama hakları bulunmakta olup, bu yönde tercihi bulunan Müşterilere Öİ sunulmaz. (Söz konusu tercihin güncellenebileceği araç/arayüzler müşterilere sunulmalıdır)
- Ödeme İste katman servisinin müşterilere sunulması için mobil kanalın kullanılması zorunlu olup diğer kanalların kullanımı ödeme hizmeti sağlayıcılarının tercihine bırakılmıştır. Mobil uygulama yüklü olmayan müşterilerde davet isteği göndermek ÖHS inisiyatifindedir.
- Müşterilerin Öİ’ye karşılık verdikleri yanıtın içeriği, onların yasal yükümlülüklerini değiştirmez. Örneğin, fatura ödemesine ilişkin bir Öİ talebi alan Borçlu’nun olumsuz yanıt vermesi, onun faturayı ödeme yükümlülüğünü ortadan kaldırmaz.
- TR Karekod ile başlatılan ödeme iste akışlarının, FAST TR Karekod Teknik İlke ve Kurallar Rehberi’nde belirlenen zorunlu üretime geçiş tarihleri gözetilerek desteklenmesi gerekmektedir.
- Alacaklı ÖHS alacaklı müşteriden Öİ talebini aldığı sırada kendi tarafındaki güvenlik süreçlerini işletmesi ve Öİ talebini Borçlu ÖHS’ye iletmeden işlemi sonlandırması tavsiye edilmektedir.
- ÖHS’lerin sunuyor oldukları servisleri en fazla 3000 ms içinde yanıt dönecek şekilde tasarlamalıdır.
- ÖHS'ler mevcut online işlem kanallarından sundukları erişilebilirlik ve performans kriterlerinden daha düşük bir hizmet kalitesi sunmamalıdır. 
- Ödeme İste kanal veya yetki tanımı varsayılan değerinin Açık ya da Kapalı olarak sunulması ÖHS inisiyatifindedir.
<br> - Kanal veya yetki tanımı varsayılan değerinin AÇIK olması önkoşulu olarak Müşteri’nin mobil bankacılık (çevrimiçi) kanalının açık olması beklenmektedir. Ek olarak, Borçlu müşteriye ilk Ödeme İste talebi geldiğinde Borçlu ÖHS tarafından Ödeme İste kanal/yetki tanımının kapatılabilmesi seçeneği sunulmalıdır. 
<br> -  Kanal veya yetki tanımı varsayılan değerinin KAPALI tanımlanması durumunda, Borçlu müşteriye ilk Ödeme İste talebi geldiğinde işlem reddedilecek(Alacaklı ÖHS’ye TR.OIS.Business.RestrictedAccount hata kodu ile dönülecek) ancak, Borçlu ÖHS tarafından müşteriye kendisine bir Ödeme İste talebi geldiği bilgisi verilmeli ve kanal/yetki açabilme seçeneği sunulmalıdır.
- Kanal bilgisi açık olup sonradan kapalı hale getirilen borçlu müşteride mevcutta ödenmemiş ve iptal edilmemiş Öİ taleplerinin yaşam döngüsü devam ettirilmelidir.
- Ödeme İste Hizmeti'nin Alacaklı ve Borçlu akışları için müşteri tipleri özelinde destekleme bilgisi aşağıdaki şekildedir.

| Alacaklı ÖHS Müşteri Tipi | Alacaklı ÖHS Desteği(İsteğe Bağlı/Zorunlu)    |  Borçlu ÖHS Müşteri Tipi | Borçlu ÖHS Desteği(İsteğe Bağlı/Zorunlu)  | Borçlu ÖHS Aksiyon  | 
| --- | --- | --- | --- | --- |
| Kurumsal | İ | Kurumsal | İ | Kurumsal müşteri desteği verilmediği durumda hata kodu üretilecektir. |
| Kurumsal | İ | Bireysel | Z | - |
| Bireysel | Z | Kurumsal | İ | Kurumsal müşteri desteği verilmediği durumda hata kodu üretilecektir. |
| Bireysel | Z | Bireysel | Z | - |

**"İsteğe bağlı" olan alanların "zorunlu" olacağı son tarih 21 Temmuz 2024 olarak belirlenmiştir.**

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
-	Sonra Kabul/Hemen Öde modeli olacaktır.

Öİ API İlke ve Kuralları v2.0 sürümünde ;
-	Sonra Kabul/Hemen Öde, Sonra Kabul/Sonra Öde, Şimdi Kabul/Hemen Öde modelleri ve ek fonksiyonlar yer almaktadır.

<h4>Öİ Oluşturma API’si 1 Ay desteklenmeye devam etmelidir. Öİ Yanıt API’si ise 4 Ay desteklenmeye devam etmelidir.</h4>

**S2.0’a geçiş yapıldığında S1.0’da oluşturulan ödeme iste talepleri sürecine devam ettirilmelidir. Bunun sağlanabilmesi için;**
- Ödeme iste taleplerinin versiyon bilgisi tutulmalı ve mevcut ödeme iste talepleri için varsayılan S1.0 olarak güncellenmelidir.
- API desenine yeni eklenen alanlar mevcut ödeme iste nesnelerine varsayılan değerler güncellenmelidir. erkenOdeme = E, odemeErteleme = H ve kismiOdeme = H olmalıdır.

**S2.0’a geçiş yapıldığında S1.0 endpointleri belirtilecek tarihe kadar kapatılmamalıdır. İki sürüm desteği de sağlanmalıdır.**
- Versiyon bilgisine göre ödeme iste talebi yanıtlanmalıdır. S1.0‘da oluşturulan ödeme iste talebi S1.0 yanıt API’si ile yanıtlanmalıdır. S2.0’da oluşturulan ödeme iste talebi ise sadece S2.0 PUT yanıt API’si ile yanıtlanmalıdır.
- Versiyon bilgisine göre ödeme iste talebi sorgulanmalıdır. S1.0‘da oluşturulan ödeme iste talebi S1.0 API’si ile sorgulanmalıdır. S2.0’da oluşturulan ödeme iste talebi ise sadece S2.0 GET sorgulama API’si ile yanıtlanmalıdır.
- Versiyon bilgisine göre ödeme iste talebi iptal edilmelidir. S1.0‘da oluşturulan ödeme iste talebi S1.0 iptal API’si ile iptal edilmelidir. S2.0’da oluşturulan ödeme iste talebi ise sadece S2.0 PUT iptal API’si ile iptal edilmelidir.
- Alacaklı ÖHS S2.0 geçti ise ekranlarında borçlu IBAN bilgisini çözümledikten sonra Borçlu ÖHS’nin S2.0’ı desteklediğini kontrol etmelidir. Desteklemiyor ise ödeme İste talebi S1.0'da oluşturulur. Destekliyor ise ödeme İste talebi S2.0'da oluşturulur.
- S1.0 endpointlerinde oluşturulan ödeme iste taleplerinde yeni eklenen alanlar varsayılan değerleriyle kayıt edilmelidir. Ödeme iste sürüm bilgisi S1.0 olacak şekilde kayıt edilmelidir.
- S1.0 endpointlerinde oluşturulan ödeme iste taleplerinde yeni eklenen alanlar varsayılan değerleriyle kayıt edilmelidir. Ödeme iste sürüm bilgisi S1.0 olacak şekilde kayıt edilmelidir.

<br>

- Sürüm 1.0’da oluşturulan ödeme iste talebi S2.0’da sorgulama/iptal/yanıt API’si ile çağırıldığında **“TR.OIS.Resource.APIVersionNotSupported”**  hatası verilmelidir.
- Sürüm 2.0’da oluşturulan ödeme iste talebi S1.0’da sorgulama/iptal/yanıt API’si ile çağırıldığında **“TR.OIS.Resource.APIVersionNotSupported”** hatası verilmelidir. 

| | **Sadece S1.0 Destekleyen Borçlu ÖHS'ler** | **S1.0 ve S2.0 Destekleyen Borçlu ÖHS'ler**|
| --- | --- |--- |
| **Sadece S1.0 Destekleyen Alacaklı ÖHS'ler** | Alacaklı ÖHS; <br> -Ödeme İste talebi S1.0'da oluşturmalıdır. <br><br>Borçlu ÖHS; <br>-Ödeme iste talebine S1.0'da başarılı yanıt dönmelidir.<br>-Yanıt API'si S1.0 ile çağırılmalıdır.| Alacaklı ÖHS;<br>-Ödeme İste talebi S1.0'da oluşturulur.<br><br>Borçlu ÖHS;<br>-S1.0 endpointlerini kapatmamalıdır. İki sürüm desteği de sağlanmalıdır.<br>-API desenine yeni eklenen alanların varsayılan değerleri ile kayıt edilmelidir. erkenOdeme=E, odemeErteleme=H ve kismiOdeme=H olmalıdır.<br>-Ödeme iste oluştur S1.0 başarılı yanıt dönmelidir.<br> -Yanıt API'si S1.0 ile çağırılmalıdır. |
| **S1.0 ve S2.0 Destekleyen Alacaklı ÖHS'ler** | Alacaklı ÖHS; <br>-Borçlu IBAN bilgisi çözümlenerek borçlu ÖHS versiyon bilgisi kontrol edilir. Sadece S1.0 destekleniyorsa ödemeİste talebi S1.0'da oluşturulur.<br><br>Borçlu ÖHS; <br>-Sürüm S1.0 oluşturulmuş ödeme iste talepleri, yanıt apisi S1.0 ile yanıtlanmalıdır. | Alacaklı ÖHS; <br>-Borçlu IBAN bilgisi çözümlenerek borçlu ÖHS versiyon bilgisi kontrol edilir.<br>-Ödeme İste talebi S2.0'da oluşturulur.<br>-S2.0 için ekran tasarımlarını çözümlenen IBAN bilgisine göre açılabilir ya da varsayılan değerler gönderilebilir.<br><br>Borçlu ÖHS; <br>-Ödeme iste talebine S2.0'da başarılı yanıt dönmelidir. <br>-Yanıt API'si S2.0 ile çağırılmalıdır. <br> -Sürüm S2.0 oluşturulmuş ödeme iste talepleri, yanıt apisi S2.0 ile yanıtlanmalıdır.|

## 3.4.	Kaynak URI Yol Yapısı

ÖHS’lerin başlattığı çağrılarda URI yolu aşağıdaki yapıyı takip eder:

**[öhs-yol-ön-eki]/odeme-iste-api/[kaynak-grubu]/[sürüm]/ [kaynak]/[kaynak-no]**

**[öhs-yol-ön-eki]/odeme-iste-api/ois/s1.0/odeme-iste/odemeIsteRefNo**

**[öhs-yol-ön-eki]/odeme-iste-api/ois/s2.0/odeme-iste/odemeIsteRefNo**

Bu, aşağıdaki unsurlardan oluşur:

-	[öhs-yol-ön-eki]
İsteğe bağlı, ÖHS'ye özgü yol ön ekini ifade eder.
GEÇİT üzerinden yapılan çağrılarda BKM tarafından belirlenen sistem adı ve yol ön eki kullanılır.
-	ois, ois-api
Sabit metin “ois” (Ödeme İste Servisleri kısaltması)
-	[kaynak-grubu]
Kaynak grubu, API’ye erişmek için kullanılan ödeme iste hizmeti için erişim adresi (end point) grubunu tanımlar ("ois").
-	[sürüm]
API sürümünü ifade eder (“/s[ana-sürüm].[alt-sürüm]/”).
-	[kaynak]/[kaynak-no]
Kaynak detaylarını ifade eder.

ÖHS, tüm kaynakları için aynı katılımcı yolu ön ekini ve sistem adını kullanmalıdır. BKM API’lerine erişmek isteyen uygulamaların yetkilerine göre aşağıdaki API’ye abone olmaları gerekmektedir.
OIS (Ödeme İste Servisleri) :
-	https://xbank.com.tr/api-portal/odeme-iste-api/ois/s1.0/odeme-iste (ÖHS)
-	https://secure.api-preprod.bkm.com.tr/odeme-iste-api/ois/s1.0/odeme-iste (BKM GEÇİT)

## 3.5.	Karakter Kodlama

API istekleri ve yanıtlarının **Başlık** parametrelerinde ISO-8859-1 standartında yer alan karakter kümesi kullanılmalıdır. 

API istekleri ve yanıtlarında **Gövde** parametrelerinde UTF-8 karakter kodlaması kullanılır. Bu, JSON için varsayılan karakter kodlamasıdır.

Ancak, bir ÖHS'nin kendi uygulamaları ve ödeme başlattığı ödeme sistemi (Havale vb.) bazı UTF-8 karakterlerini kabul etmeyebilir. ÖHS, UTF-8 kodlaması içeren bir mesajı işleyemez ve reddederse, HTTP 400 (Hatalı İstek) durum kodu ile yanıt vermelidir.

Ödeme iste talebinde borçlu ve alacaklı işlem açıklamasında işlenemeyecek karakterler var ise **"TR.OIS.Business.InvalidCharacter"** hatası verilir. Açıklama alanında fast sistemine taşınamayacak karakter kümesine izin verilmemelidir.

Gövde parametrelerinde desteklenen UTF-8 karakter kümesi aşağıda listelenmiştir. 

|Karakter |UTF 8 <br> Hex.|Karakter |UTF 8 <br> Hex. |Karakter |UTF 8 <br> Hex. |Karakter |UTF 8 <br> Hex.|
| --- | --- | --- | --- | --- | --- |--- | --- |
|   | 20 | =    | 3d | X | 58 | r | 72 |
| ! | 21 | ?   | 3f | Y | 59 | s | 73 |
|#|23|@|40|Z|5a|t|74|
|%|25|A|41|[|5b|u|75|
|&|26|B|42|\\|5c|v|76|
|'|27|C|43|]|5d|w|77|
|(|28|D|44|^|5e|x|78|
|)|29|E|45|_|5f|y|79|
|*|2a|F|46|a|61|z|7a|
|+|2b|G|47|b|62|{|7b|
|,|2c|H|48|c|63|}|7d|
|-|2d|I|49|d|64|Ç|c3 87|
|.|2e|J|4a|e|65|Ö|c3 96|
|/|2f|K|4b|f|66|Ü|c3 9c|
|0|30|L|4c|g|67|ç|c3 a7|
|1|31|M|4d|h|68|ö|c3 b6|
|2|32|N|4e|i|69|ü|c3 bc|
|3|33|O|4f|j|6a|Ğ|c4 9e|
|4|34|P|50|k|6b|ğ|c4 9f|
|5|35|Q|51|l|6c|İ|c4 b0|
|6|36|R|52|m|6d|ı|c4 b1|
|7|37|S|53|n|6e|Ş|c5 9e|
|8|38|T|54|o|6f|ş|c5 9f|
|9|39|U|55|p|70|||
|:|3a|V|56|q|71|||
|;|3b|W|57|||||


Bearer HTTP Authorization Şeması RFC 6750'de tanımlanmıştır. <https://www.rfc-editor.org/rfc/rfc6750#section-2.1> bölümünde izin verilen karakterlerin gönderilmesi beklenmektedir. Buradaki standartın her 3 parametre için de uygulanmasına karar verilmiştir. 

RFC 6750 içerisinde bearer token formatı şu şekildedir : 1*( ALPHA / DIGIT / "-" / "." / "&#95;" / "~" / "+" / "/" ) *"="  
Augmented BNF for Syntax Specifications (ABNF) ile ifade edilen bu formatta token en az 1 adet alfanumerik karakter veya özel karakter ("-", "." , "&#95;" , "~" , "+" , "/")  içermeli ve 0 ya da daha çok sayıda "=" karakteri ile bitmelidir.   

ALPHA = A-Z / a-z aralığındaki harflerdir.  
DIGIT = 0-9 aralığındaki rakamlardır.


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
Örneğin; Ödeme İste API'sindeki "Tutar" alanı "100.25" ve "Para Birimi" alanı "TRY" olarak iletildiğinde 25 değerinin kuruş olduğu anlaşılmalıdır. TRY işlemler için 2 basamak kuruş gönderilmesi gerekmektedir. Tutar alanı regex patterni şu şekildedir: '^\d{1,18}$|^\d{1,18}\.\d{1,5}$'
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

İstek ve Cevap mesajlarında kullanılacak olan nesneler tüm elemanlarını kapsayacak şekilde Ödeme İste Swagger dosyasında detaylı olarak paylaşılmıştır.

## 3.10. Mesaj İmzalama

Dijital imzalama yapısı, Ödeme İste API’de gerçekleştirilen işlemlerin ve taşınan verilerin bütünlük ve inkâr edilemezliğini sağlamak amacıyla kurgulanmıştır. İmzaların kaynak bazında hangi istek ve yanıtlara uygulandığı belirlidir.

API yalnızca TLS'ye dayanırsa, dijital kayıtları ve inkâr edilemezlik kanıtlarını tutmak zor olur. Bu nedenle, TLS'ye dayanmayan bir inkâr edilemezlik çözümü olarak API isteğinin HTTP başlığında bir JWS kullanılarak sağlanabilir.

HTTP isteğinin gövdesinin hash fonksiyonu (SHA256) ile özeti alınacaktır. Elde edilen özet, asimetrik anahtarları destekleyen bir algoritma kullanılarak imzalanacak ve JWS elde edilecektir. İsteğin kendinize geldiği durumda body üzerinde hiç bir değişikliğe tabi tutmadan (serialize/deserialize, minify, trim, vb yapmadan) doğrulama yapmanız gerekmektedir. Aynı şekilde isteğin kendinizden çıktığı aşamada da response body üzerinde hiç bir değişikliğe tabi tutmadan (serialize/deserialize, minify, trim, vb yapmadan) mesaj imzalama yapılmalıdır.

Bu kapsamda imzalama akışı aşağıdaki gibi olmalıdır:

-	ÖHS öncelikle özel ve açık anahtarlarını oluşturmalıdır. Bu anahtarları oluşturmak için aşağıda “openssl” kullanılarak oluşturma örneği paylaşılmıştır. Bu anahtarlardan özel olan anahtar mesajı imzalamak için kullanılacak olup, açık anahtar ise mesajı doğrulamak amacıyla mesajın alıcısı tarafından kullanılacaktır.

Özel anahtarın oluşturulması. private.pem => Özel anahtar <br>
**```openssl genrsa -out private.pem 2048```**<br><br>

Özel anahtardan açık anahtarın oluşturulması. public_key.pem => Açık anahtar (BKM ile paylaşılacak açık anahtar)<br>
**```openssl rsa -in private.pem -pubout -outform PEM -out public_key.pem```**<br><br>

Opsiyonel olarak özel anahtarın PCKS8 formatına çevrilmesi (Java açısından PCKS8 formatında olma ihtiyacı nedeniyle). private_key.pem => Özel anahtarın formatlanmış hali. <br>
**```openssl pkcs8 -topk8 -inform PEM -in private.pem -out private_key.pem –nocrypt```**<br><br>

-	Açık ve Özel anahtarlar oluşturulduktan sonra Açık Anahtar BKM ile paylaşılır. BKM bu açık anahtarı diğer katılımcıların ulaşabilmesi ve alabilmesi için bir Anahtar Deposu yaklaşımı ile bünyesinde tutar. İlgili anahtarı iletebilmek ve alabilmek için kullanılacak OHS API’ye erişim detayları 9.OHS API içerisinde detaylı olarak paylaşılmıştır. Eğer kurumun ilgili anahtar çiftinin yenilenme durumu söz konusu ise yenilemenin hemen ardından açık anahtar yeni bir imzalama yapılmadan önce mutlaka BKM ile paylaşılmalıdır.

-	İmzalı mesajı açacak olan kurum mesajı imzalayan kurumun açık anahtarını her sorguda yeniden almak durumunda değildir. Belirli periyodlarda kendi ortamındaki anahtarı yenileyerek sistemi işletebilir. Ancak imzalayan kurum anahtar çifti yenilemesi yaptığında BKM ile açık anahtarını paylaşsa dahi imzalı mesajı doğrulayacak taraf eski açık anahtar ile doğrulama yapmaya çalıştığı için hata alacaktır. Bu ilk hata durumunda hızlıca BKM üzerinden yeni anahtarı alıp mesajı tekrar doğrulamayı denemelidir. Eğer yine hata alıyor ise doğrulama işlemini hata statüsüne almalıdır. Bu sebeple anahtar yenileyen kurum yeni açık anahtarını yeni bir mesaj imzalama yapmadan önce mutlaka BKM ile paylaşmalıdır.

- Yanıt mesajının içerisinde yer alan imzanın doğrulanması aşamasında hata alınması durumunda işleme devam edilmemeli ve hata üretilerek paydaşlara bilgi verilmelidir.

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
Mesajları doğrulamak için tarafların açık anahtarlarının paylaşılması için BKM bir servis sağlayacaktır. OHS API olarak adlandırılımış olan bu servis ile ÖHS listesine ulaşılabildiği gibi doğrulama işlemi için ihtiyaç duyulacak olan açık anahtarlara da bu servis üzerinden erişilebilinecektir.

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
-	İstek ve Yanıt başlığında yer alan alanların; POST GET PUT metotlarında, Zorunlu/Koşullu/İsteğe Bağlı/Yok kullanım durumları aşağıdaki tabloda listelenmiştir.
-  OdemeIste nesnesinde POST,GET,PUT metotlarında isteği başlatan taraf alacaklı müşteri olacağı için alacaklı ÖHS kod ,x-source-code değeridir. OdemeIsteYaniti nesnesinde POST metotunda isteği başlatan borçlu olacağı için x-source-code değeri borçlu ÖHS kod bilgisidir.
- BKM'nin yapacağı ÖHS olay bildirimlerinde x-target-code ve x-source-code aynı değer olacak olup değişiklik yapılan OHS'ye ait kurum kodunu içerecektir.

**Tablo 2: İstek Başlığında Yer Alan Veriler**
|Başlık İsimleri |Format |Notlar |POST |GET |PUT |
| --- | --- | --- | --- | --- | --- |
|X-Request-ID  | AN1..36 | İsteği başlatan ÖHS tarafından belirlenen çağrıya özgü talep kimliği. İstek numarası. <br> Örnek: Ödeme iste talebi iş akışının her adımında farklı “x-request-id” değeri kullanılır. <br> Çağrıların aynı yanıtı dönmesinin beklendiği durumlarda (idempotent işlemlerde) aynı değer ile çağrı yapılır.   | Z |Z |Z  |
|Content-Type | AN1..20| Standart HTTP Başlığı; Talepte sağlanan payload’ın biçimini temsil eder. Bu değerin application/json olarak gönderilmesi gerekmektedir. Hata durumlarında application/problem+json da iletilebilir.<br> (Başka bir değere ayarlanırsa, ÖHS, 415 Desteklenmeyen Ortam Türü (Unsupported Media Type) ile yanıt vermelidir)|Z|-|Z|
|X-Source-Code |AN4| İsteği başlatan Ödeme Hizmeti Sağlayıcısının (ÖHS) kodudur. |Z |Z|Z| 
|X-Target-Code|AN4|İsteği alan Ödeme Hizmeti Sağlayıcısı (ÖHS) kodudur.	 |Z|Z|Z|
|Authorization|AN1..4096|Katılımcı ile GEÇİT arasındaki otorizasyon için kullanılan token bilgisidir.	|Z|Z|Z|
|X-JWS-Signature|AN1..4096|HTTP isteğinin gövdesinin hash fonksiyonu (SHA256) ile özeti alınacaktır. Elde edilen özet, asimetrik anahtarları destekleyen bir algoritma kullanılarak imzalanacak ve JWS elde edilecektir.Bu başlığın ne zaman belirtilmesi gerektiği hususu ilgili endpoint için imzalama türü başlığında İmzalı İstek olarak belirtilmiştir. |Z|-|Z|
|X-Channel-Type|AN1|İsteğin başlatıldığı kanal bilgisidir. **TR.OIS.DataCode.KanalBilgisi** sıralı veri türü değerlerinden birini alır.|Z|-|-|
|PSU-Fraud-Check | AN1..4096 |ÖHS'lerin çeşitli güvenlik kontrollerini gerçekleştirerek, önemli görülen aşağıdaki bilgileri birbirleri ile paylaşmaları gerekmektedir. **X-Channel-Type, web ya da mobil ise gönderilmesi zorunludur.** <br> PSU-Fraud-Check alanının POST/odeme-iste servisi içerisinde gönderimi zorunludur. Flagler, JWT claims içine key value şeklinde eklenerek gönderilecektir. 3.10. Mesaj İmzalama Akışı'nda belirtilen yöntemle imzalanarak oluşturulan JWT PSU-Fraud-Check alanına konularak Alacaklı ÖHS tarafından Borçlu ÖHS'ye iletilmelidir. <br><br> Paylaşılacak bilgiler şu şekildedir.<br> <br><b>CustomerOpenDate</b> : Alıcı ÖHS tarafından, alıcı hesap sahibinin müşteri olma tarihi üzerinden geçen gün değerini ifade eder. <br> **Gönderilmesi Zorunlu alandır.**<br>TR.OIS.DataCode.ZmnAralik sıralı veri tipinin alabileceği değerleri alabilir.<br> <br><b>AccountOpenDate</b> : Ödeme iste talebi içerisinde yer alan alıcı hesabın (Alıcı IBAN) açılma tarihi üzerinden geçen gün değerini ifade eder. <br> **Gönderilmesi Zorunlu alandır.**<br>TR.OIS.DataCode.ZmnAralik sıralı veri tipinin alabileceği değerleri alabilir.<br> <br><b>CustomerAgeFlag</b> : Alıcı müşteriye ait yaş aralığını ifade eden değerdir. <br>**Gönderilmesi zorunlu alandır. Bireysel müşteriler için TR.OIS.DataCode.YasAralik veri tiplerinden 1,2,3,4,5 değerleri iletilmelidir. Tüzel/Kurumsal müşteriler için ise 0 değeri iletilmelidir.** <br><br><b>RemoteCustomerFlag</b> : Alıcı müşterinin uzaktan müşteri edinimi ile oluşturulmuş bir müşteri bilgisi olup olmadığını belirten değerdir. <br> **Gönderilmesi Zorunlu alandır.**<br>TR.OIS.DataCode.VarYok sıralı veri tipinin alabileceği değerleri alabilir. Örneğin; uzaktan müşteri edinimi ile kazanılmış bir müşteri ise değerin "1:Kayıt Var" olarak iletilmesi gerekmektedir.<br> <br><b>CustomerSalaryFlag</b> : Alıcı müşterinin Alıcı ÖHS içerisinde maaş müşterisi olup olmadığını belirten değerdir. <br> **Gönderilmesi Zorunlu alandır.**<br>TR.OIS.DataCode.VarYok sıralı veri tipinin alabileceği değerleri alabilir. Örneğin; maaş müşterisi olan bir müşteri için değerin "1:Kayıt Var" olarak iletilmesi gerekmektedir.<br> <br><b>FirstRequestTimeFlag</b> : Alacaklı müşterinin Alacaklı ÖHS nezdinde ilk Ödeme İste talebi yaptığı tarih üzerinden geçen gün değerini ifade eder. <br> **Gönderilmesi Zorunlu alandır.**<br>TR.OIS.DataCode.ZmnAralik sıralı veri tipinin alabileceği değerleri alabilir.<br> <br><b>DeviceFirstLoginFlag</b>  Müşterinin müşterilik ömründe işlem anında kullandığı cihazla ÖHS uygulamasına (web ya da uygulama tabanlı) ilk login olma süresini ifade eden değer. Müşteri cihaz değişikliği yaptığında DeviceFirstLoginFlag değeri değişmelidir.  <br> **Gönderilmesi Zorunlu alandır.**<br>TR.OIS.DataCode.ZmnAralik sıralı veri tipinin alabileceği değerleri alabilir.<br> <br> | K | - | - |

PSU-Fraud-Check için imza bilgisi isteği alan ÖHS tarafından doğrulanmalıdır. Doğrulama işlemi başarısız olması durumunda **TR.OIS.Resource.PsuFraudInvalidSignature** kodu ile hata üretilmelidir.

PSU-Fraud-Check bilgisinin iletilmediği durumlarda ise **TR.OIS.Resource.PsuFraudMissingSignature** kodu ile hata üretilmelidir.

PSU-Fraud-Check içerisinde yer alan zorunlu alanlardan(Örn: CustomerOpenDate) herhangi birinin eksik olması durumunda iletilen eksik imza bilgisi için **TR.OIS.Resource.PsuFraudInvalidFormat** kodu ile hata üretilmelidir.

## 3.14. Yanıt Başlığı

-	"Başlık isimleri" yorumlanırken küçük büyük harfe duyarlı olmamalıdır. Örneğin "x-ReQuEsT-Id" geçerli bir başlık ismidir.
-	"Başlık değerleri" yorumlanırken ise küçük büyük harf duyarlılığı olmalıdır. Örneğin "xyz123" ile "XYZ123" değerleri farklıdır.
-	 Başlık değerlerinde ISO-8859-1 standartında yer alan karakter kümesi kullanılmalıdır. Örneğin "X-Request-Id" değerinde "İOS12"  
    yazmak, büyük "İ" harfinin ISO-8859-1 içerisinde yer almamasından dolayı, hataya yol açacaktır.
-  OdemeIste nesnesinde GET,POST,DELETE metotlarında isteği alan taraf borçlu müşteri olacağı için borçlu ÖHS kod ,x-target-code değeridir. OdemeIsteYaniti nesnesinde POST metotunda isteği alan alacaklı olacağı için x-target-code değeri alacaklı ÖHS kod bilgisidir.
- BKM'nin yapacağı ÖHS olay bildirimlerinde x-target-code ve x-source-code aynı değer olacak olup değişiklik yapılan OHS'ye ait kurum kodunu içerecektir.

**Tablo 3: Yanıt Başlığında Yer Alan Veriler**
|Başlık İsimleri |Format |Notlar |POST |GET |PUT |
| --- | --- | --- | --- | --- | --- |
|X-Request-ID  | AN1..36 | İsteği başlatan ÖHS tarafından belirlenen çağrıya özgü talep kimliği. İstek numarası. <br> Örnek: Ödeme iste talebi iş akışının her adımında farklı “x-request-id” değeri kullanılır. <br> Çağrıların aynı yanıtı dönmesinin beklendiği durumlarda (idempotent işlemlerde) aynı değer ile çağrı yapılır. <br> **İlgili istek başlığındaki bilgi geri dönülür.**   | Z |Z |Z  |
|Content-Type | AN1..20| Standart HTTP Başlığı; Talepte sağlanan payload’ın biçimini temsil eder. Bu değerin application/json olarak gönderilmesi gerekmektedir. Hata durumlarında application/problem+json da iletilebilir.<br> (Başka bir değere ayarlanırsa, ÖHS, 415 Desteklenmeyen Ortam Türü (Unsupported Media Type) ile yanıt vermelidir)|Z|-|Z|
|X-Source-Code |AN4| İsteği başlatan Ödeme Hizmeti Sağlayıcısının (ÖHS) kodudur. <br> **İlgili istek başlığındaki bilgi geri dönülür**  |Z |Z|Z| 
|X-Target-Code|AN4|İsteği alan Ödeme Hizmeti Sağlayıcısının (ÖHS) kodudur. <br> **İlgili istek başlığındaki bilgi geri dönülür.**	|Z|Z|Z|
|X-JWS-Signature|AN1..4096|HTTP yanıtının gövdesinin hash fonksiyonu (SHA256) ile özeti alınacaktır. Elde edilen özet, asimetrik anahtarları destekleyen bir algoritma kullanılarak imzalanacak ve JWS elde edilecektir.Bu başlığın ne zaman belirtilmesi gerektiği hususu ilgili endpoint için imzalama türü başlığında İmzalı Yanıt olarak belirtilmiştir. Yanıt başlığındaki  “X-JWS-Signature”  gönderimi zorunlu olan endpointler için; <br> Başarılı yanıt alındığı her durumda doğrulama yapılmalı. <br>(2**)Hatalı yanıt alındığı durumlarda ise X-JWS-Signature başlık değeri dolu ise doğrulama yapılmalıdır. (4**, 5**)	|Z|Z|Z|
 
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
>>**&#8680;	InvalidFormat**     **<br>InvalidFormat hata kodlarında fieldErrors içeriği gönderilmeli ve anlaşılır açıklama ile message , messageTr alanları doldurulmalıdır.**      
>>**&#8680;	NotFound**  
>>**&#8680;	InvalidSignature**    
>>**&#8680;	MissingSignature**  
>>**&#8680;	RecipientMismatch**     
>>**&#8680;	SenderMismatch**    
>>**&#8680;	MethodNotAllowed**  
>>**&#8680;	NotAcceptable**  
>>**&#8680;	PsuFraudInvalidSignature**  
>>**&#8680;	PsuFraudMissingSignature**  
>>**&#8680;	PsuFraudInvalidFormat**     
>>**&#8680;	RefNoAlreadyExists**    
>>**&#8680;	RefNoMismatch**     
>>**&#8680;	UnsupportedMediaType**  

>**TR.OIS.Business**  
>>**&#8680;	InvalidContent**   
>>**&#8680;	RecipientAccountMismatch**  
>>**&#8680;	SenderAccountMismatch**     
>>**&#8680;	InvalidSenderTitle**    
>>**&#8680;	InvalidSenderAccount**  
>>**&#8680;	RestrictedAccount**     
>>**&#8680;	SenderRestrict**     
>>**&#8680;	InvalidExpireTime**          
>>**&#8680;	FastLimitExceeded**     
>>**&#8680;	StateMismatch**     
>>**&#8680;	InvalidApproveTime**     
>>**&#8680;	BlockedRecipient**      
>>**&#8680;	UnsupportedCorporate**      
>>**&#8680;	UnsupportedRequestedPaymentTime**   

>**TR.OIS.Connection** 
>>**&#8680;	InvalidCertificate**  
>>**&#8680;	InvalidSender**  
>>**&#8680;	InvalidRecipient**      
>>**&#8680; InvalidToken** 

>**TR.OIS.Server**  
>>**&#8680;	InternalError**  
>>**&#8680;	ServiceUnavailable**

TR.OIS.Resource.InvalidFormat hatası alındığı durumda; fieldErrors nesnesi içerisinde verilecek hata kodları : 

>**TR.OIS.Field**	  
>>**&#8680;	Missing**   
>>**&#8680;	Invalid**  

**Veri Tipi Örneği:**

```JSON
{
    "path": "/odeme-iste-api/ois/s1.0/odeme-iste",
    "id": "b6ac3b8f-d604-12b6-bne1-3a800e270219",
    "timestamp": "2023-07-01T10:33:15+03:00",
    "httpCode": 400,
    "httpMessage": "Bad Request",
    "moreInformation": "Validation error",
    "moreInformationTr": "Şema kontrolleri başarısız",
    "fieldErrors": [
        {
            "objectName": "odemeIsteTalebi",
            "field": "tutarBilgi.paraBirimi",
            "messageTr": "boş değer olamaz",
            "message": "must not be null",
            "code": "TR.OIS.Field.Missing"
        },
        {
            "objectName": "odemeIsteTalebi",
            "field": "alacakliBilgi.musteriTipi.kimlik.kimlikDegeri",
            "messageTr": "boyut '7' ile '11' arasında olmalı",
            "message": "size must be between 7 and 11",
            "code": "TR.OIS.Field.Invalid"
        }
    ],
    "errorCode": "TR.OIS.Resource.InvalidFormat"
} 
```  

**Tablo 4: HTTP Durum Kodları**

|HTTP Durum |İstek Sonucu ve Açıklamalar |POST |GET|DELETE |
| --- | --- | --- | --- | --- |
| 200 OK | **İstek Başarıyla Tamamlandı.**<br>Kaynak güncellemek için yapılan (örneğin, GET) ve başarıyla tamamlanan isteklerinde kullanılır.  | H | E | H |
| 201 Created | **İstek Başarılı Oldu.**<br>Kaynak yaratma isteği (örneğin, POST /odeme-iste) başarıyla sonuçlandı. | E | H | H |
| 204 No Content | **Silme işlemi başarıyla tamamlandı.**<br>Kaynak silme isteği (örneğin, **DELETE/odeme-iste/{odemeIsteRefNo}**) başarıyla sonuçlandı. | H | H | E |
| 400 Bad Request | **İstekte bozuk, eksik veya uyumlu olmayan JSON gövdesi, URL parametreleri veya başlık alanları var.** İstekle başlatılan işlem yapısal bozukluk, eksik veya tutarsız veri veya HHS tarafındaki kontrollerin hatalı sonuçlanması nedeniyle hata ile sonuçlanır ve hataya ilişkin veriler hata nesnesi içerisinde dönülür. | E | E | E |
| 401 Unauthorized | **Yetkilendirme başlığı eksik, hatalı veya geçersiz olduğundan istek yetkilendirilmediğinde ve erişim reddedildiğinde http 401 kodu dönülmelidir.**| E | E | E |
| 404 Not Found | **ÖHS geçerli bir API erişim adresini sağlamıyorsa, o URL'ye gelen istekler için 404 (Bulunamadı) ile yanıt vermelidir.**Uygulama esaslarında tanımlanmayan bir kaynak için bir URL'ye erişmeye çalışırsa (örneğin, GET /yurtdisi-odeme-iste), ÖHS, 404 (Bulunamadı) ile yanıt vermeyi seçebilir.| E | E | E |
| 405 Method Not Allowed | **İsteği başlatan ÖHS, desteklenmeyen bir yöntemle kaynağa erişmeye çalıştı.**| E | E | E |
| 406 Not Acceptable | **İstek, geçersiz bir karakter kümesi içeriyor.**| E | E | E |
| 415 Unsupported Media Type | **İstek gövdesi hedef kaynakta bu yöntem tarafından desteklenmeyen bir biçimde oluşturulduğu için işlem reddedildi**| E | H | H |
| 500 Internal Server Error | **API sunucu / servis katmanında sorun oluştu. İşlem başarısız.**<br> 5XX hata durumlarında yanıt gövde değeri olmadığı için mesaj imzalama yapılamaz ve x-jws-signature alanı boş olarak iletilir.<br> Bu durumda x-jws-signature kontrolü yapılmamalıdır.| E | E | E |
| 503 Service Unavailable | Hizmet sürümü kullanımdan kaldırıldı veya hizmet verilemiyor durumu. | E | E | E |

**Hata Örnekleri:**

<ins>**400 Bad Request**</ins>

**TR.OIS.Business.InvalidContent** hatası Borçlu ÖHS tarafından yapılacak iş kuralı kontrollerinin başarısız olduğu durumda verilmelidir.  
**TR.OIS.Resource.InvalidFormat** hatası şema validasyonu, alan uzunluk ve varlık kontrollerinin başarısız olduğu durumda verilmelidir. 
**<br>InvalidFormat hata kodlarında fieldErrors içeriği gönderilmeli ve anlaşılır açıklama ile message , messageTr alanları doldurulmalıdır.**

```JSON
{
    "path": "/odeme-iste-api/ois/s1.0/odeme-iste",
    "id": "b6ac3b8f-d604-12b6-bne1-3a800e270219",
    "timestamp": "2023-07-01T10:33:15+03:00",
    "httpCode": 400,
    "httpMessage": "Bad Request",
    "moreInformation": "Validation error",
    "moreInformationTr": "Şema kontrolleri başarısız",
    "fieldErrors": [
        {
            "objectName": "odemeIsteTalebi",
            "field": "tutarBilgi.paraBirimi",
            "messageTr": "boş değer olamaz",
            "message": "must not be null",
            "code": "TR.OIS.Field.Missing"
        },
        {
            "objectName": "odemeIsteTalebi",
            "field": "alacakliBilgi.musteriTipi.kimlik.kimlikDegeri",
            "messageTr": "boyut '1' ile '30' arasında olmalı",
            "message": "size must be between 1 and 30",
            "code": "TR.OIS.Field.Invalid"
        }
    ],
    "errorCode": "TR.OIS.Resource.InvalidFormat"
} 
```  

Zorunlu header alanlarından biri ya da birkaçı eksik olarak gönderilirse aşağıdaki gibi bir hata dönüşü gerçekleşebilir.

Borçlu ÖHS uygulaması tarafından dönülebilecek hata örnekleri:
```JSON 

{
    "path": "/odeme-iste-api/ois/s1.0/odeme-iste",
    "id": "2005515d-f0e6-4a07-a439-0ef3b0f56011",
    "timestamp": "2023-07-02T10:39:26+03:00",
    "httpCode": 400,
    "httpMessage": "Bad Request",
    "moreInformation": "Validation error",
    "moreInformationTr": "Şema kontrolleri başarısız",
    "errorCode": "TR.OIS.Resource.InvalidFormat",
    "fieldErrors": [
        {         
            "field": "X-Request-ID",
            "messageTr": "X-Request-ID değeri boş olamaz.",
            "message": "X-Request-ID cannot be null.",
            "code": "TR.OIS.Field.Invalid"
        }
    ]
} 

```
İstek başlığında yer alan x-target-code ile istek gövdesi içerisinde yer alan Borçlu ÖHS kod aynı olmadığı durumda dönülecek hata örneği:

```JSON 

{
    "path": "/odeme-iste-api/ois/s1.0/odeme-iste",
    "id": "2005515d-f0e6-4a07-a439-0ef3b0f56011",
    "timestamp": "2023-07-02T10:39:26+03:00",
    "httpCode": 400,
    "httpMessage": "Bad Request",
    "moreInformation": "Recipient Code Error",
    "moreInformationTr": "Borçlu ÖHS kod istek ve gövde değeri eşleşmiyor",
    "errorCode": "TR.OIS.Resource.SenderMismatch"
    
} 

```
İstek başlığında yer alan x-source-code ile istek gövdesi içerisinde yer alan Alacaklı ÖHS kod aynı olmadığı durumda dönülecek hata örneği:

```JSON 

{
    "path": "/odeme-iste-api/ois/s1.0/odeme-iste",
    "id": "2005515d-f0e6-4a07-a439-0ef3b0f56011",
    "timestamp": "2023-07-02T10:39:26+03:00",
    "httpCode": 400,
    "httpMessage": "Bad Request",
    "moreInformation": "Recipient Code Error",
    "moreInformationTr": "Alacaklı ÖHS kod istek ve gövde değeri eşleşmiyor",
    "errorCode": "TR.OIS.Resource.RecipientMismatch"
    
} 

```

Business hata örneği - 1:  
```JSON 
{
    "path": "/odeme-iste-api/ois/s1.0/odeme-iste",
    "id": "677cfd9d-77c1-4ea3-8bdf-74a6e9887177",
    "timestamp": "2023-07-04T11:05:59+03:00",
    "httpCode": 400,
    "httpMessage": "Bad Request",
    "moreInformation": "sender title wrong",
    "moreInformationTr": "Gönderen Ünvan hatalı",
    "errorCode": "TR.OIS.Business.InvalidSenderTitle"
} 
```
GEÇİT'te yapılan zorunlu header kontrollerinde aşağıdaki hatalar dönebilir:
```JSON 

{
    "timestamp": "2023-07-04T10:40:28+03:00",
    "path": "/odeme-iste-api/ois/s1.0/odeme-iste",
    "id": "d4375748-6fc7-4f7e-94f3-6411cab1d59f",
    "moreInformationTr": "Geçersiz ÖHS kodu.",
    "errorCode": "TR.OIS.Connection.InvalidRecipient",
    "moreInformation": "Invalid Recipient Code",
    "httpCode": 400,
    "httpMessage": "Bad Request"
} 
 ```
GEÇİT tarafından dönülecek hata örneği:
```JSON 

{
    "timestamp": "2023-07-05T10:40:28+03:00",
    "path": "/odeme-iste-api/ois/s1.0/odeme-iste",
    "id": "d4375748-6fc7-4f7e-94f3-6411cab1d59f",
    "moreInformationTr": "Geçersiz ÖHS kodu.",
    "errorCode": "TR.OIS.Connection.InvalidSender",
    "moreInformation": "Invalid Sender Code",
    "httpCode": 400,
    "httpMessage": "Bad Request"
} 
 ```

GEÇİT tarafından dönülecek hata örneği:
```JSON 

{
    "timestamp": "2023-07-03T11:14:05+03:00",
    "path": "/odeme-iste-api/ois/s1.0/odeme-iste",
    "id": "ee1e3ea7-a5e5-468b-bb02-314148f84e6a",
    "moreInformationTr": "Geçersiz öhs rolü. İlgili api çağrısı için yetkisi yok.",
    "errorCode": "TR.OIS.Connection.InvalidSenderRole",
    "moreInformation": "Invalid Sender Role",
    "httpCode": 403,
    "httpMessage": "Forbidden"
} 

 ```

 <ins>**401 Unauthorized**</ins>

**Borçlu ÖHS, İstek Başlığı içerisinde BKM tarafından iletilecek olan Authorization  hatalı olmasu durumunda 401 (Yetkisiz) http kodu ile aşağıdaki hata kodunu dönmelidir.**

```json 

{
    "path": "/odeme-iste-api/ois/s1.0/odeme-iste",
    "id": "ed3fd667-fc58-40ad-a982-e8937faccd15",
    "timestamp": "2023-07-06T11:17:33+03:00",
    "httpCode": 401,
    "httpMessage": "Unauthorized",
    "moreInformation": "Authorization Invalid",
    "moreInformationTr": "Token bilgisi hatalıdır.",
    "errorCode": "TR.OIS.Connection.InvalidToken"
} 
 

```

<ins>**403 Forbidden**</ins>

X-JWS-Signature zorunluluğu olan isteklerde gelmemesi durumunda TR.OIS.Resource.MissingSignature, hatalı gelmesi durumunda TR.OIS.Resource.InvalidSignature hata kodları Borçlu ÖHS tarafından dönülür ve Alacaklı ÖHS işleme devam edemez.


```json 
{
  "path": "/odeme-iste-api/ois/s1.0/odeme-iste",
  "id": "3e48ea98-f889-48b9-aa6e-28aabc6cfb14",
  "timestamp": "2023-07-06T11:20:05+03:00",
  "httpCode": 403,
  "httpMessage": "Forbidden",
  "moreInformation": "X-JWS-Signature header not found in the Recipient request",
  "moreInformationTr": "Alacaklı OHS den gelen istekte X-JWS-Signature basligi bulunamadi.",
  "errorCode": "TR.OIS.Resource.MissingSignature"
} 
```

```json 
{
  "path": "/odeme-iste-api/ois/s1.0/odeme-iste",
  "id": "1a36bc78-d381-16a2-aa6e-28bcab3af633",
  "timestamp": "2023-07-05T11:20:05+03:00",
  "httpCode": 403,
  "httpMessage": "Forbidden",
  "moreInformation": "X-JWS-Signature header in the Recipient request could not be parsed",
  "moreInformationTr": "Alacaklı OHS den gelen istekte X-JWS-Signature basligi okunamadi.",
  "errorCode": "TR.OIS.Resource.InvalidSignature"
} 
```

<ins>**500 Internal Server Error**</ins>

```json 
{
  "id": "1b90c6dc-0277-4755-8b05-9297ddfab743",
  "path": "/odeme-iste-api/ois/s1.0/odeme-iste",
  "timestamp": "2023-07-07T11:41:34+03:00",
  "httpCode": 500,
  "httpMessage": "Internal Server Error",
  "moreInformation": "Unexpected condition was encountered.",
  "moreInformationTr": "Beklenmeyen bir durumla karşılaşıldı.",
  "errorCode": "TR.OIS.Server.InternalError"
} 

```


<ins>**503 Service Unavailable**</ins>

```json 
{
  
  "id": "e76315b7-09f4-4295-b6d8-1f7fec632159",
  "path": "/odeme-iste-api/ois/s1.0/odeme-iste",
  "timestamp": "2023-07-07T23:18:56+03:00",
  "httpCode": 503,
  "httpMessage": "Service Unavailable",
  "moreInformation": "OHS is currently unavailable",
  "moreInformationTr": "ÖHS şu anda hizmet veremiyor.",
  "errorCode": "TR.OIS.Server.ServiceUnavailable"
}
```

## 3.17. Fonksiyonel Olmayan Gereksinimler

BKM Geçit’te katılımcı, API endpointi, çağrım metodu bazında (Path+Method+Katılımcı) 10 saniyede çağırılabilecek işlem sayısı 1000 olarak belirlenmiştir. Bu rakamın üzerinde yapılacak işlemlerde BKM Geçit tarafından HTTP 429 - Too Many Requests hatası dönülecektir.

## 3.18. Sıralı Veri Türleri

**Tablo 6: Sıralı Veri Türleri**

|**Kod** |**Açıklama** |
| --- | --- |
|TR.OIS.DataCode.MusteriTip	| B: Bireysel <br>K: Kurumsal |
|TR.OIS.DataCode.KimlikTur	| Kod, Tip, Format <br>K , TCKN , N11 <br>V, VKN, AN10 <br>Y , YKN , N11 <br>P , PNO , AN7..9|
| TR.OIS.DataCode.OdemeAmaci | Ödemenin Amacına yönelik olarak aşağıdaki değerlerden birini alır:<br>01: Konut Kirası Ödemesi<br>02: İş yeri Kirası Ödemesi<br>03: Diğer Kira Ödemesi<br>04: E-Ticaret Ödemesi: Elektronik ticaret işlem amaçlı aktarımlar<br>05: Çalışan Ödemesi: Maaş, harcırah, prim gibi çalışan ödemeleri<br>06: Ticari ödeme: Ticari işletmelerin birbirlerine, kendi hesaplarına veya müşterilerine ödemeleri, borç, ithalat, ihracat, şirket satın alma, vb. kapsamında ödemeler<br>07: Bireysel Ödeme: Özel amaçlı (aile bireylerine, hediye, bağış, borç, alışveriş vs.) ödemeler<br>08: Yatırım: Mevduat, menkul kıymet, döviz, gayrı menkul, taşıt, varlık alımı, temettü ödeme, tahsilat vb. gibi yatırım amaçlı ödemeler<br>09: Finansal: Kredi, depo, repo, türev, finansal varlık alım/satımı vb. ödemeler<br>10: Eğitim ödemesi<br>11: Aidat ödemesi<br>12: Diğer (Diğer seçeneği ÖHS "Havale" süreçleri için eklenmiştir. FAST işlemlerinde "Diğer" ödeme amacı kullanılmamalıdır.) |
|TR.OIS.DataCode.AkisTur	| 01: Hesaptan Hesaba Ödemeler <br>02: Hesaptan Hesaba İşyeri Ödemeleri <br><br> Kurumsal API üzerinden başlatılan Ödeme İste talepleri için akış türü "01: Hesaptan Hesaba Ödemeler" ve "02: Hesaptan Hesaba İşyeri Ödemeleri" iletilebilir.<br>"01: Hesaptan Hesaba Ödemeler" ve "02: Hesaptan Hesaba İşyeri Ödemeleri" akış türleri ile ilgili "Fast Sistemi Referans Belgesi ve Ödeme İste Genel İlkeler Belgesi" dokümanına uyulması gerekmektedir.|
|TR.OIS.DataCode.OHSDurumu | A : Açık. Üretim Ortamında ÖHS’nin aktif bir şekilde hizmet vermesi durumu.<br> Y : Yaygınlaştırma. Üretim Ortamında ÖHS’nin kendisi tarafından tanımlanmış kısıtlı müşteriye hizmet vermesi durumu. <br>  G : Geçici Hizmet Veremiyor. ÖHS servislerinde teknik bir sorun olması nedeniyle ÖHS’nin hizmet verememesi durumu. <br>K: Kapalı. ÖHS’nin hizmet vermeme durumu. |
| TR.OIS.DataCode.OdemeIsteDurumu | B: Yanıt Bekleniyor<br>K: Kabul Edildi<br>G: Ödeme Sistemine İletildi<br>O: Ödeme Gerçekleşti<br> I: İptal Edildi |
| TR.OIS.DataCode.OdemeIsteIptDtyKod | '01': Borçlu Müşteri Ödeme İsteğini Reddetti<br>'02': Borçlu Müşteri Beklenen Sürede Ödeme İsteğine Yanıt Vermedi<br>'03': Borçlu ÖHS Fraud Nedeniyle İptal Etti<br>'04': Borçlu ÖHS Ödeme Sistemine İletemedi<br>'05': Borçlu ÖHS Ödeme İste Yanıt’ını Alacaklı ÖHS’ye İletemedi<br>'11': Alacaklı Müşteri Ödeme İste Talebinden Vazgeçti<br>'12': Alacaklı ÖHS Fraud Nedeniyle İptal Etti<br>'13':  Alacaklı ÖHS Ödeme İste Değerleri Uyuşmaması Nedeniyle İptal Etti<br>'21': FAST Sistem Hatası<br>'22':  FAST Ödeme İste Bilgileri Doğrulanamadı<br>'23':  FAST Ödeme İste Zaman Kontrolleri Doğrulanamadı<br>|
|TR.OIS.DataCode.EvetHayir	| E: Evet <br>H: Hayır |
|TR.OIS.DataCode.OlayTip	| OHS_GUNCELLENDI |
|TR.OIS.DataCode.KaynakTip	| OHS |
|TR.OIS.DataCode.VarYok	| 0: Kayıt Yok <br>1: Kayıt Var |
|TR.OIS.DataCode.ZmnAralik	| 1: 0-1 gün <br>2: 2-14 gün <br>3: 15-30 gün <br>4: 31-90 gün <br>5: 91 gün ve üstü |
|TR.OIS.DataCode.YasAralik	| 0:Tüzel/Kurumsal Müşteriler <br> 1: 1-20 yaş <br>2: 21-30 yaş <br>3: 31-40 yaş <br>4: 41-50 yaş <br>5: 51 yaş ve üzeri |
|TR.OIS.DataCode.KanalBilgisi	| M : Mobil <br> W : Web <br>A : API |


