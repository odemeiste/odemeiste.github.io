# 9.OHS API

OHS API, ÖHS’lerin detay bilgilerini sunan servistir. Bu servis ile aşağıdaki istek/yanıt yapıları ile ihtiyaç duyulabilecek ilgili bilgiler temin edilebilir. OHS API için “ohs_read” scope bilgisi kullanılır.

Production ortamında OHS API içerisinde sisteme dahil olmuş, sertifikasyonu başarı ile tamamlamış paydaşlar listelenecektir. 

**GET /ohs/{ohsKod}**

-	https://secure.api-preprod.bkm.com.tr/ohs-api/s1.0/ohs (BKM GEÇİT)
-	https://secure.api-preprod.bkm.com.tr/ohs-api/s1.0/ohs/1234 (BKM GEÇİT)

İşlem Sorgu Örneği = /ohs ⇨ bu sorgu yöntemi ile tüm ÖHS’lerin dizi şeklinde verileri listelenir.
İşlem Sorgu Örneği = /ohs/1234 ⇨ bu sorgu yöntemi ile gönderilmiş olan ÖHS kodu’na ait bilgiler listelenir. Ya da “404 Not Found” hatası alır.

**Tablo 12: ÖHS Bilgileri Sorgulama Yanıtı "OHS" nesnesi**

|Alan Adı |Parametre Adı |Format |Zorunlu/Koşullu/İsteğe bağlı|Açıklama |
| --- | --- | --- | --- | --- |
|ÖHS Kodu	|kod	|AN4|	Z	|ÖHS'nin kod bilgisi|
|ÖHS Unvanı	|unv	|AN3..140|	Z	|ÖHS'nin unvan bilgisi|
|ÖHS Markası	|marka	|AN1..140|	Z	|ÖHS'nin marka bilgisi|
|ÖHS Kodu	|kod	|AN4|	Z	|Müşterinin kolaylıkla algılayabileceği kısa unvan bilgisi. ÖHS tarafından belirlenecektir.|
|Açık Anahtar	|acikAnahtar	|AN1..1024|	Z	|ÖHS’nin mesaj imzalama için paylaştığı açık anahtar|
|ÖHS Api Bilgileri	|apiBilgileri	|Kompleks:<br> OhsApiBilgi[Array][0..N]|	Z	|Desteklenen Api ve sürüm bilgileri dönülecektir.|
| > api	|api	|AN1..20|	Z	|Api İsmi Örnek :ois
| > surum	|surum	|AN1..10|	Z	|Api Sürüm Kodu Örnek: s1.0, s2.0 s1.0|
|Durum	|durum	|AN1|	Z	|ÖHS'nin durum bilgisidir.TR.OIS.DataCode.OHSDurumu sıralı veri tipinde alabileceği değerler belirtilmiştir.|

ÖHS API'de; Açık, Yaygınlaştırma, Geçici Hizmet Veremiyor, Kapalı durumlarındaki ÖHS'ler listelenecektir.

Sertifikasyon onayı alan ÖHS'ler, üretim ortamına geçişte "Yaygınlaştırma" durumuna sahip olabilir. ÖHS'nin, diğer ÖHS'ler ile "Yaygınlaştırma" kontrollerini yapacağı, kendi yönetiminde olacaktır. Böylece Üretim Ortamında ÖHS’nin kendisi tarafından tanımlanmış kısıtlı müşteriye hizmet vermesi ve servislerini test etmesi sağlanabilir olacaktır. ÖHS’ler kendi kurum kontrollerini yapana kadar, "Yaygınlaştırma" durumunda kalabilirler. ÖHS'nin BKM'ye yapacağı talep ile, ÖHS "Yaygınlaştırma" durumundan "Açık" durumuna geçebilecektir.

Aşağıdaki durumlarda ÖHS'nin statüsü Geçici Kapalı olarak güncellenebilecektir:

-	ÖHS'nin talebi ile uzun süreli (minimum 1 saati aşan) yaşanan teknik sorunlarda G statüsüne alınabilecektir. G statüsüne alınma talebinin ÖHS tarafından odemeiste@bkm.com.tr ye mail atarak iletilmesi beklenmektedir.
-	İlgili resmi kurumlardan gelen talep üzerine ÖHS G statüsüne alınabilir.

