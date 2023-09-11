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
