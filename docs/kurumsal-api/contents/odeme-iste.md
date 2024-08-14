# 7.	Ödeme İste

## Genel Bilgiler

Ödeme İste Kurumsal API, işyeri entegrasyonlarında kullanılması için standart hale getirilmiştir. BKM tarafından standartlar belirlenmiş olup alacaklı ÖHS'lerin sunacağı Öİ Kurumsal API’lerinin bu standartlara uyması beklenmektedir. 

**Kurumsal API, taslak olarak yayınlanmış olup detaylandırılmaya devam edilmektedir.**

**1.**  İşyeri, ödeme isteği başlatmak için kendi sistemlerinde Kurumsal API aracılığıyla Öİ talebi oluşturarak alacaklı ÖHS’ye iletir. <br>
**2.**	Alacaklı ÖHS, işyerinden gelen ödeme isteğini API üzerinden alır ve işler. Alacaklı ÖHS, ödeme isteğini doğrular ve gerekli kontrolleri yaptıktan sonra doğrulanan ödeme isteğini BKM üzerinden mevcut ödeme iste talep API’sini çağırarak borçlu ÖHS’ye iletir.<br>
**3.**	Borçlu ÖHS tarafından müşterisine ödeme isteği iletilir. Ödeme isteği, ödeme iste yanıt API’si çağırılarak onaylanır ya da reddedilir.<br>
**4.**	Yanıt borçlu ÖHS tarafından alacaklı ÖHS’ye bildirilir.<br>
**5.**	İşyeri tarafından belirli periyotlar ile sorgulama yapılarak ödeme iste talebinin durumu öğrenilir. 



## Ödeme İste Hizmeti için Erişim Adresleri (Endpoints)

Alacaklı ÖHS tarafından işyerine açılacak olan endpoint adresleri aşağıda listelenmiştir.

**Etki Alanı (Scope) ="odeme_iste_kurumsal"**

|No  |Kaynak |HTTP işlemi|Erişim Adresi |Zorunlu / İsteğe Bağlı|Yetkilendirme Türü |İmzalama |İstem Nesnesi |Yanıt Nesnesi |
| --- |--- |--- |--- |--- |--- |--- |--- |--- |--- |
| 1 | odeme-iste | POST | /odeme-iste | Z | İstemci Kimlik Bilgileri | İmzalı İstek ve Yanıt | OdemeIsteTalebi | OdemeIste | 
| 2 | odeme-iste | GET |  /odeme-iste/{isyeriOiRefNo} | Z | İstemci Kimlik Bilgileri | İmzalı Yanıt |  | OdemeIste | 
| 3 | odeme-iste | PUT |  /odeme-iste/{isyeriOiRefNo}/iptal     | Z | İstemci Kimlik Bilgileri | İmzalı İstek ve Yanıt | OdemeIsteIptal | OdemeIste | 

**Not: Başarılı isteklerde imza kontrolü zorunlu, hatalı isteklerde ise imza başlığı varsa kontrolü zorunludur.**

## 7.1. ADIM 1: ADIM 1: Ödeme İsteğinin Oluşturulması

İşyeri, ödeme isteği başlatmak için kendi sistemlerinde Öİ Kurumsal API aracılığıyla ödeme iste talebi oluşturarak alacaklı ÖHS’ye iletir.

POST /odeme-iste

BAŞARILI İSTEK ve YANIT :

Z: Zorunlu, K: Koşullu, İ: İsteğe Bağlı, N/A: Yok

|Alan Adı |Json Alan Adı |Format: Veri Modeli İsmi |Açıklama|İstek |Yanıt |
| --- | --- | --- | --- | --- | --- | 
|İşyeri Bilgi | isyeriBilgi | Kompleks: isyeriBilgi | İşyerine ait bilgilerdir. | Z | Z |  
| > İşyeri Referans Numarası	|isyeriOiRefNo	|AN41|İşyeri tarafından oluşturulan Ödeme İste talebine özgü tekil referans numarasıdır. <br>Önerilen Format:  <br>{isyeriKodu}-{guid}  <br>Örn: 8000- f534e8f2-9fbf-48cc-914b-12fbaffd8104    (size: 41)| Z | Z | 
| > İşyeri Kodu 	|isyeriKodu	|AN1..36| Alacaklı ÖHS tarafından işyerine tahsis edilen tekil kimlik bilgisidir. İstek başlığındaki X-Merchant-ID ile aynı değer olmalıdır.| Z | Z | 
| > Alt İşyeri Kodu	|altIsyeriKodu	|AN1..36| Alacaklı ÖHS tarafından alt işyerine tahsis edilen tekil kimlik bilgisidir. İstek başlığındaki X-Sub-Merchant-ID ile aynı değer olmalıdır.| İ | İ | 
|Alacaklı Bilgisi	|alacakliBilgi	|Kompleks:AlacakliBilgi| Alacaklıya ait bilgilerdir.	| Z | Z | 
| > Alacaklı Hesap/Müşteri Tipi	| musteriTipi	|AN1| Alacaklı müşterinin hesap numarasına ilişkin Kurumsal-Bireysel hesap bilgisi ayrımının belirtildiği alandır.  Ödeme İste Sistemi'nde tanımlı değerlerden biri olmalıdır.<br>B:Bireysel <br>K: Kurumsal| Z | Z | 
| > Kurumsal İşyeri Tabela Adı	| isYeriTabelaAdi|AN3..140| İşyeri tarafından alacaklı ÖHS sistemlerinde tanımlı tabela adı bilgisidir. | K | K | 
| > Kimlik	|kimlik	|Kompleks:Kimlik| 	| Z | Z | 
|  >> Alacaklı Kimlik Tipi	|kimlikTipi	|AN1| TR.OIS.DataCode.KimlikTur sıralı veri türü değerlerinden birini alır.| Z | Z | 
|  >> Alacaklı Kimlik No ( TCKN/VKN/YKN/Pasaport No ) |kimlikDegeri|AN7..11| Alacaklı müşteriye ait geçerli bir TC Kimlik Numarası, Vergi Kimlik Numarası, Yabancı Kimlik Numarası ya da Pasaport Numarası bilgilerinden birinin bulunduğu alandır.| Z | Z | 
| > Hesap	|hesap	|Kompleks:Hesap| 	| Z | Z | 
|  >> Alacaklı Ad Soyad/Ticari Unvan |hesapSahibi	|AN3..140| Alacaklı müşterinin ad-soyad veya ticari ünvan bilgisidir. <br>İşyeri için ilgili acquirer üye tarafından tahsis edilmiş olan işyeri adı bilgisidir.(Merchant Name) İşyerinin sık kullanılan adı ya da tabela ünvanı olmalıdır.<br> Alfanumerik karakterler, '.' , '-' , '&' ve boşluk karakteri içerebilir.Borçlu ÖHS’ye Alacaklı ÖHS tarafından Unvan bilgisi açık bir şekilde iletilmelidir. Borçluya ÖHS ekranlarında gösterimi açık olmalıdır.| İ | İ |
|  >> Alacaklı IBAN	|hesapNo	|AN26| Alacaklı müşteriye ait bir IBAN olmalıdır. TR ile başlamalı ve 26 karakter uzunluğunda iletilmelidir.Borçlu ÖHS’ye Alacaklı ÖHS tarafından IBAN açık bir şekilde iletilmelidir. Borçluya ÖHS ekranlarında gösterimi açık olmalıdır.| Z | Z |
|Borçlu Bilgisi	|borcluBilgi	|Kompleks:BorcluBilgi| Borçluya ait bilgilerdir.	| Z | Z | ||Borçlu Bilgisi	|borcluBilgi	|Kompleks:BorcluBilgi| Borçluya ait bilgilerdir.| Z | Z | 
| > Hesap	|hesap	|Komlepks:Hesap|	| Z | Z | 
| >> Borçlu Ad Soyad/Ticari Unvan	|hesapSahibi	|AN3..140| Borçlu müşterinin ad-soyad veya ticari ünvan bilgisidir.İşyeri için ilgili acquirer üye tarafından tahsis edilmiş olan işyeri adı bilgisidir.(Mercant Name)İşyerinin sık kullanılan adı ya da tabela ünvanı olmalıdır.Alfanumerik karakterler, '.' , '-' , '&' ve boşluk karakteri içerebilir.Borçlu ÖHS  borçlu hesap unvanının kendi kurumunda uyumlu olduğunu kontrol eder. ÖHS’lerin EFT/FAST işlemlerindeki doğrulama kriterleri geçerlidir.| Z | Z | 
| >> Borçlu IBAN |hesapNo	|AN26|Borçlu müşteriye ait bir IBAN olmalıdır. TR ile başlamalı ve 26 karakter uzunluğunda iletilmelidir. Borçlu IBAN gönderimi zorunludur. Borçlu IBAN bilgisi borçlu müşteri tarafından değiştirilebilir. Alacaklı ÖHS tarafından yapılacak olan ödeme iste sorgulamalarında da IBAN değişmiş olsa dahi Borçlu ÖHS tarafından Alacaklı ÖHS'nin ilettiği IBAN bilgisi dönülmelidir.| Z | Z | 
| > Kolas	|kolas	|Komlepks:Kolas|Kolas ile başlatılan Ödeme İste taleplerinde kolasa ait bilgilerdir. Kolas işlemlerinde gönderilmelidir.| K| K | 
| >> Kolas Tür	|kolasTur	|AN1| Borçlu müşterinin TR.OIS.DataCode.KolasTur sıralı veri türü değerlerinden birini alır. Borçlu Hesap Numarası girilmediyse kullanımı zorunludur.| Z | Z | 
| >> Kolas Değeri |kolasDeger	|AN7..50| Müşterinin eklediği, ÖHS (FAST katılımcısı) tarafından doğrulanmış Kolay Adres değeridir. Alabileceği değerler BKM “Kolay Adresleme Sistemi Uygulama Kuralları” belgesinde tanımlıdır.| Z | Z | 
| > TR Karekod	|karekod	|AN1..12|TR Karekod ile başlatılan Ödeme İste taleplerinde okutulan TR Karekod için çözümlenen değer bilgisidir. | K | K | 
|Tutar Bilgileri	|tutarBilgi	|Kompleks: TutarBilgi|	| Z | Z | 
|> Tutar	|tutar	|AN1..24| Alacaklı ÖHS’nin önyüzde kullanıcıdan aldığı tutar bilgisidir.	| Z | Z |
|> Para Birimi	|paraBirimi	|AN3| Para birimi. FAST işlemleri kapsamında sadece TL gönderimi olacaktır. 	| Z | Z | 
|Ödeme İste Talep Detayı	|talepDetayi	|Kompleks:TalepDetay|	| Z | Z | 
|> Ödeme İste Akış Türü	|akisTur	|AN2|01: Kişiden Kişiye<br>02: İşyeri Ödemesi| Z | Z |
|> Ödeme Amacı	|odemeAmaci	|AN2|TR.OIS.DataCode.OdemeAmaci sıralı veri değerlerinden birini alır. Borçlu bu bilgiyi değiştiremeyecektir.Sadece alacaklı seçebilir.| Z | Z |
|> MCC Kodu	|mccKodu|AN1..4|Tripsit altında dokümanlar bölümünde yayınlanacaktır. Kurumsal API üzerinden çağırılan isteklerde gönderilmesi beklenen kategori kodu bilgisidir.| İ | İ | 
|> Son Geçerlilik Zamanı (SGZ)	|sonGecerlilikZamani	|ISODateTime|Borçlu müşterinin Öİ talebine yanıt verebileceği son zaman bilgisidir. Bu zamandan sonra Öİ talebi geçersiz sayılacaktır. Sonra Kabul Hemen Öde akışı için Son Geçerlilik Zamanı Ödeme İste Oluşturulma Zamanından minimum 3 dakika öncesi maksimum 3 ay sonrası olacak şekilde seçilmelidir. İşyeri tarafından ödeme isteği oluşturulurken seçilir. | Z | Z | 
|>Talep Edilen Ödeme Zamanı (TEÖZ)	|talepEdilenOdemeZamani	|ISODateTime| İşyerinin, ödeme iste talimatı içerisinde yer alan ve ödemenin yapılmasını talep ettiği tarih/zaman bilgisidir. **Sonra Kabul/Hemen Öde modelinde TEÖZ bilgisi gönderilmemelidir**.<br>TEÖZ tarih formatı:<br>YYYY-MM-DDThh:mm:ss. <br> **Şimdi Kabul/Sonra Öde ve Sonra Kabul/Sonra Öde** modellerinde işyeri tarafından ekranlardan saat seçimi yaptırılmıyorsa ilgili günün gün sonu 23:59:59+03:00 olarak gönderilmelidir. <br>TEÖZ, ödeme iste oluşturulma zamanından maksimum 6 ay sonrası seçilebilir.| K | K | 
|> Alacaklı İşlem Açıklaması	|alacakliIslemAciklamasi	|AN1..200|İşyeri tarafından Borçlu'ya iletilecek Açıklama bilgisidir.| İ | İ | 
|> Kısmi Ödeme	|kismiOdeme	|AN1|Belirtilen tutardan daha az tutarda Öİ talebinin kabul edilmesine izin verildiği durumda E; izin verilmediği durumda H olarak gönderilmelidir. Tüm modellerde kullanılabilir. Sonra Öde modellerinde; TEÖZ öncesi yapılacak ödemelerde kısmi ödeme gerçekleştirilebilir. odemeErteleme = E olduğu durumda ise; TEÖZ sonrası kabul edilen Öİ taleplerinde kısmı ödeme gerçekleştirilemez. Kısmi ödeme bilgisi alacaklı tarafından gönderilir. Borçlu tarafından değiştirilememektedir.<br> E: Kısmi ödemeye izin verilir.<br> H: Kısmi ödemeye izin verilmez.| Z | Z | 
|> Erken Ödeme	|erkenOdeme	|AN1|Öİ talebi oluşturulurken TEÖZ'den önce ödenmesine izin verildiği durumda E; izin verilmediği durumda H olarak gönderilmelidir. Sonra Kabul - Hemen Öde modelinde "E" olarak gönderilmelidir.<br> E: Erken ödemeye izin verilir.<br> H: Erken ödemeye izin verilmez. Ödeme iste talebi sadece TEÖZ tarihinde gerçekleştirilir.| Z | Z | 
|> Ödeme Erteleme	|odemeErteleme	|AN1|Öİ talebi oluşturulurken TEÖZ sonra ödenmesine izin verildiği durumda E olarak gönderilmelidir. Vade tarihi bilgisinde ödeme yapılmasına olanak sağlar. Öİ talebi vadeTarihi, TEÖZ’den maksimum 3 ay sonrasına kadar ertelenmesine izin verilmelidir. Sonra Kabul - Hemen Öde modelinde "H" olarak gönderilmelidir. <br> E: Ödemenin ertelenmesine izin verilir.<br> H: Ödemenin ertelenmesine izin verilmez. | Z | Z | 
|> Vade Planı	|vadePlani	|Kompleks:VadePlani[Array]|Ödeme Erteleme E ise gönderilmesi zorunludur. Vade planı listelenir. İlk fazda tek satır olarak gönderilmelidir.| K | K | 
|>> Vade Tarihi	|vadeTarihi	|ISODate|TEÖZ'den sonra ödeme yapılacak tarih bilgisidir. Vade tarihi TEÖZ’den ileri bir tarih olmalıdır. TEÖZ’den maksimum 3 ay sonrasına kadar ertelenmesine izin verilmelidir.| Z | Z | 
|>> Vade Tutarı	|vadeTutari	|AN3|TEÖZ'den sonra kabul edilecek Öİ talebinde ödeme yapılması istenen tutar bilgisidir.| Z | Z | 
|Ek Bilgi | ekBilgi | Kompleks: ekBilgi[Array] | İşyeri tarafından gönderilmek istenen API deseninde yer almayan bilgiler gönderilmelidir. | İ | İ |  
| > Anahtar	|anahtar	|AN1..200|Gönderilmesi istenen alanı açıklayıcı ifade. Örnek: FATURANO | İ | İ | 
| > Değer 	|deger	|AN1..200| Gönderilmesi istenen alanın alacağı değer. Örnek: R0123456789	| İ | İ | 
|Ödeme İste Durum Bilgi	|durumBilgi	|Kompleks:DurumBilgi|	| NA | Z | 
|> Ödeme İste Durumu	|odemeIsteDurumu	|AN1|TR.OIS.DataCode.OdemeIsteDurumu sıralı veri tipini değerlerinden birini alır. Örn; ödeme iste'ye ait ilk istek mesajına dönüşte “B: Yanıt Bekleniyor” değerini alması beklenir.| NA | Z | 
|> Ödeme İste İptal Detay Kodu	|odemeIsteIptalDetayKodu	|AN2|Rıza durumunun iptal olduğu durumda zorunludur.| NA | K | 
|> Ödeme İste Oluşturulma Zamanı	|odemeIsteOlusturulmaZamani	|ISODateTime|Ödeme iste talebi'nin Borçlu ÖHS tarafından oluşturulduğu zaman bilgisidir. odemeIsteDurumu'nun "B" olduğu zaman için oluşacak bilgidir.| NA | Z | 
|> Borçlu Kabul Zamanı	|kabulZamani	|ISODateTime|Kabul durumunda gönderilebilecektir. odemeIsteDurumu'nun "K" olduğu zaman için oluşacak bilgidir.| NA | K | 
|> Ödeme Sistemi Gönderim Zamanı	|odemeSistemineGonderimZamani	|ISODateTime|Borçlu ÖHS tarafından ödemenin ödeme sistemine gönderilme zamanıdır. Borçlu müşteri kabul ettiği durumda iletilecektir. odemeIsteDurumu'nun "G" olduğu zaman için oluşacak bilgidir.| NA | K | |
|> Borçlu ÖHS Ödeme Zamanı	|odemeZamani	|ISODateTime|Ödeme'nin gerçekleştiği zaman bilgisidir. odemeIsteDurumu'nun "O" olduğu zaman için oluşacak bilgidir.| NA | K | 
|> Borçlu İptal Zamanı	|iptalZamani	|ISODateTime|İptal durumunda gönderilebilecektir. odemeIsteDurumu'nun "I" olduğu zaman için oluşacak bilgidir.| NA | K | 
|Ödeme İste Yanıt Detayı	|yanitDetayi	|Kompleks:YanıtDetayı|	| NA | K | 
|> Beklenen Ödeme Tarihi	|beklenenOdemeTarihi	|ISODate|Sonra öde seçeneklerinde Borçlu’nun ödemeyi taahhüt ettiği tarih bilgisidir. Ödeme Erteleme yapıldığı durumda beklenen ödeme tarihi, vade tarihi olarak gönderilmelidir. | NA | K | 
|> Borçlu İşlem Açıklaması	|borcluIslemAciklamasi	|AN1..200| İşyeri tarafından iletilen alacaklı açıklama alanı Borçlu ÖHS ekranlarında borçlu müşteriye birebir gösterilmelidir. Borçlu müşteri tarafından değişiklik yapılabilmesi sağlanmalıdır. Borçlu müşteri tarafından değişiklik yapılmadığı durumda işyeri tarafından girilen işlem açıklaması borçlu işlem açıklaması olarak kabul edilir. Borçlu müşterinin ilgili Öİ talebine red verdiği durumda müşteri tarafından bilgi girişi yapılırsa iptal açıklama alanı olarak Alacaklı ÖHS'ye bu alan iletilir.| NA | K |
|> Kabul Edilen Tutar	|kabulEdilenTutar	|AN1..24|Müşterinin Öİ isteğini kabul ettiği tutar bilgisidir. Kısmi ödeme yapıldığı durumda kısmi ödeme tutarı, ödeme erteleme yapıldığı durumda ise vade seçeneklerindeki vade tutar bilgisi gönderilmelidir. Bunların dışında ise tutar bilgisi gönderilmelidir. Kabul Edilen Tutar alanı regex patterni şu şekildedir: '^\d{1,18}$\|^\d{1,18}\\.\d{1,5}$'| NA | K |

## 7.2. ADIM 2: Ödeme İsteğinin Sorgulanması

**GET /odeme-iste/{isyeriOiRefNo}**

- İşyeri, ödeme isteğinin mevcut durumunu kontrol etmek için, oluşturulan ödeme iste talebinin durumunu isteğe bağlı olarak alabilir. 
- Genel olarak servis çağrımlarında oluşabilecek timeout hataları nedeniyle işyeri ve alacaklı ÖHS’de ödeme iste durum farklılıklarının önüne geçilebilmesi için günlük belirli zaman aralıklarında sorgulama yapılması ve ödeme iste durumunun eşlenik olması sağlanmalıdır.

**Ödeme İste Durum**

OdemeIste kaynağı için kullanılabilecek durum göstergeleri şu şekildedir:

- A - Alacaklı ÖHS'de talep oluşturuldu.
- B - Borçludan Yanıt Bekleniyor
- K - Borçlu Kabul Etti
- G - Ödeme Sistemine Gönderildi
- O - Ödeme Gerçekleşti
- I - İptal Edildi

## 7.3. ADIM 3: Ödeme İste İptal Senaryosu

**PUT /odeme-iste/{isYeriOiRefNo}/iptal**
**OdemeIsteIptal Nesnesi**

|Alan Adı |Json Alan Adı |Format: Veri Modeli İsmi |Açıklama|İstek |
| --- | --- | --- | --- | --- |
|İşyeri Bilgi | isyeriBilgi | Kompleks: isyeriBilgi | İşyerine ait bilgilerdir. | Z | 
| > İşyeri Referans Numarası	|isyeriOiRefNo	|AN41|İşyeri tarafından oluşturulan Ödeme İste talebine özgü tekil referans numarasıdır. <br>Önerilen Format:  <br>{isyeriKodu}-{guid}  <br>Örn: 8000- f534e8f2-9fbf-48cc-914b-12fbaffd8104    (size: 41)| Z | 
| > İşyeri Kodu 	|isyeriKodu	|AN4| Alacaklı ÖHS tarafından işyerine tahsis edilen tekil kimlik bilgisidir. | Z | 
| > Alt İşyeri Kodu	|altIsyeriKodu	|AN4| Alacaklı ÖHS tarafından alt işyerine tahsis edilen tekil kimlik bilgisidir.| İ |
|Ödeme İste Durum Bilgi | durumBilgi | Kompleks:DurumBilgi | 	 | Z |
|> Ödeme İste Durumu | odemeIsteDurumu | AN1 | "I": iptal.| Z |
|> Ödeme İste İptal Detay Kodu | odemeIsteIptalDetayKodu | AN2 | "iptalDetay" : "11" Alacaklı Müşteri Ödeme İste Talebinden A ya da B Statütüsünde Vazgeçti| Z |
|> Ödeme İste Oluşturulma Zamanı	|odemeIsteOlusturulmaZamani	|ISODateTime|Ödeme iste talebi'nin borçlu ÖHS tarafından oluşturulduğu zaman bilgisidir.odemeIsteDurumu'nun "B" olduğu zaman için oluşacak bilgidir.| Z | 
|> Borçlu Kabul Zamanı	|kabulZamani	|ISODateTime|Kabul durumunda gönderilebilecektir.odemeIsteDurumu'nun "K" olduğu zaman için oluşacak bilgidir. Bilgi olması halinde iptal isteğinde iletilebilir.| K | 
|> Ödeme Sistemi Gönderim Zamanı	|odemeSistemineGonderimZamani	|ISODateTime|Borçlu ÖHS tarafından ödemenin ödeme sistemine gönderilme zamanıdır.odemeIsteDurumu'nun "G" olduğu zaman için oluşacak bilgidir.Bilgi olması halinde iptal isteğinde iletilebilir.| K | 
|> Borçlu ÖHS Ödeme Zamanı	|odemeZamani	|ISODateTime|Ödeme'nin gerçekleştiği zaman bilgisidir.odemeIsteDurumu'nun "O" olduğu zaman için oluşacak bilgidir.Bilgi olması halinde iptal isteğinde iletilebilir.| K | 
|> Borçlu İptal Zamanı	|iptalZamani	|ISODateTime|İptal durumunda gönderilebilecektir.odemeIsteDurumu'nun "I" olduğu zaman için oluşacak bilgidir.Bilgi olması halinde iptal isteğinde iletilebilir.| K | 

**BAŞARILI YANIT:**

Başarılı PUT isteği sonucu alacaklı tarafından OdemeIste nesnesi dönülmelidir.

|Alan Adı |Json Alan Adı |Format: Veri Modeli İsmi |Açıklama|Yanıt |
| --- | --- | --- | --- | --- | 
|İşyeri Bilgi | isyeriBilgi | Kompleks: isyeriBilgi | İşyerine ait bilgilerdir. | Z | 
| > İşyeri Referans Numarası	|isyeriOiRefNo	|AN41|İşyeri tarafından oluşturulan Ödeme İste talebine özgü tekil referans numarasıdır. <br>Önerilen Format:  <br>{isyeriKodu}-{guid}  <br>Örn: 8000- f534e8f2-9fbf-48cc-914b-12fbaffd8104    (size: 41)| Z | 
| > İşyeri Kodu 	|isyeriKodu	|AN1..36| Alacaklı ÖHS tarafından işyerine tahsis edilen tekil kimlik bilgisidir. İstek başlığındaki X-Merchant-ID ile aynı değer olmalıdır.| Z | 
| > Alt İşyeri Kodu	|altIsyeriKodu	|AN1..36| Alacaklı ÖHS tarafından alt işyerine tahsis edilen tekil kimlik bilgisidir. İstek başlığındaki X-Sub-Merchant-ID ile aynı değer olmalıdır.| İ | 
|Alacaklı Bilgisi	|alacakliBilgi	|Kompleks:AlacakliBilgi| Alacaklıya ait bilgilerdir.	| Z | 
| > Alacaklı Hesap/Müşteri Tipi	| musteriTipi	|AN1| Alacaklı müşterinin hesap numarasına ilişkin Kurumsal-Bireysel hesap bilgisi ayrımının belirtildiği alandır.  Ödeme İste Sistemi'nde tanımlı değerlerden biri olmalıdır.<br>B:Bireysel <br>K: Kurumsal| Z | 
| > Kurumsal İşyeri Tabela Adı	| isYeriTabelaAdi|AN3..140| İşyeri tarafından alacaklı ÖHS sistemlerinde tanımlı tabela adı bilgisidir. | K |  
| > Kimlik	|kimlik	|Kompleks:Kimlik| 	| Z | 
|  >> Alacaklı Kimlik Tipi	|kimlikTipi	|AN1| TR.OIS.DataCode.KimlikTur sıralı veri türü değerlerinden birini alır.| Z |  
|  >> Alacaklı Kimlik No ( TCKN/VKN/YKN/Pasaport No ) |kimlikDegeri|AN7..11| Alacaklı müşteriye ait geçerli bir TC Kimlik Numarası, Vergi Kimlik Numarası, Yabancı Kimlik Numarası ya da Pasaport Numarası bilgilerinden birinin bulunduğu alandır.| Z |  
| > Hesap	|hesap	|Kompleks:Hesap| 	| Z | 
|  >> Alacaklı Ad Soyad/Ticari Unvan |hesapSahibi	|AN3..140| Alacaklı müşterinin ad-soyad veya ticari ünvan bilgisidir. <br>İşyeri için ilgili acquirer üye tarafından tahsis edilmiş olan işyeri adı bilgisidir.(Merchant Name) İşyerinin sık kullanılan adı ya da tabela ünvanı olmalıdır.<br> Alfanumerik karakterler, '.' , '-' , '&' ve boşluk karakteri içerebilir.Borçlu ÖHS’ye Alacaklı ÖHS tarafından Unvan bilgisi açık bir şekilde iletilmelidir. Borçluya ÖHS ekranlarında gösterimi açık olmalıdır.| İ | 
|  >> Alacaklı IBAN	|hesapNo	|AN26| Alacaklı müşteriye ait bir IBAN olmalıdır. TR ile başlamalı ve 26 karakter uzunluğunda iletilmelidir.Borçlu ÖHS’ye Alacaklı ÖHS tarafından IBAN açık bir şekilde iletilmelidir. Borçluya ÖHS ekranlarında gösterimi açık olmalıdır.| Z | 
|Borçlu Bilgisi	|borcluBilgi	|Kompleks:BorcluBilgi| Borçluya ait bilgilerdir.	| Z |  ||Borçlu Bilgisi	|borcluBilgi	|Kompleks:BorcluBilgi| Borçluya ait bilgilerdir.	| Z | 
| > Hesap	|hesap	|Komlepks:Hesap|	| Z | 
| >> Borçlu Ad Soyad/Ticari Unvan	|hesapSahibi	|AN3..140| Borçlu müşterinin ad-soyad veya ticari ünvan bilgisidir.İşyeri için ilgili acquirer üye tarafından tahsis edilmiş olan işyeri adı bilgisidir.(Mercant Name)İşyerinin sık kullanılan adı ya da tabela ünvanı olmalıdır.Alfanumerik karakterler, '.' , '-' , '&' ve boşluk karakteri içerebilir.Borçlu ÖHS  borçlu hesap unvanının kendi kurumunda uyumlu olduğunu kontrol eder. ÖHS’lerin EFT/FAST işlemlerindeki doğrulama kriterleri geçerlidir.| Z |  
| >> Borçlu IBAN |hesapNo	|AN26|Borçlu müşteriye ait bir IBAN olmalıdır. TR ile başlamalı ve 26 karakter uzunluğunda iletilmelidir. Borçlu IBAN gönderimi zorunludur. Borçlu IBAN bilgisi borçlu müşteri tarafından değiştirilebilir. Alacaklı ÖHS tarafından yapılacak olan ödeme iste sorgulamalarında da IBAN değişmiş olsa dahi Borçlu ÖHS tarafından Alacaklı ÖHS'nin ilettiği IBAN bilgisi dönülmelidir.| Z |  
| > Kolas	|kolas	|Komlepks:Kolas|Kolas ile başlatılan Ödeme İste taleplerinde kolasa ait bilgilerdir. Kolas işlemlerinde gönderilmelidir.|K|  
| >> Kolas Tür	|kolasTur	|AN1| Borçlu müşterinin TR.OIS.DataCode.KolasTur sıralı veri türü değerlerinden birini alır. Borçlu Hesap Numarası girilmediyse kullanımı zorunludur.| Z | 
| >> Kolas Değeri |kolasDeger	|AN7..50| Müşterinin eklediği, ÖHS (FAST katılımcısı) tarafından doğrulanmış Kolay Adres değeridir. Alabileceği değerler BKM “Kolay Adresleme Sistemi Uygulama Kuralları” belgesinde tanımlıdır.| Z |  
| > TR Karekod	|karekod	|AN1..12|TR Karekod ile başlatılan Ödeme İste taleplerinde okutulan TR Karekod için çözümlenen değer bilgisidir. | K |  
|Tutar Bilgileri	|tutarBilgi	|Kompleks: TutarBilgi|	| Z |  
|> Tutar	|tutar	|AN1..24| Alacaklı ÖHS’nin önyüzde kullanıcıdan aldığı tutar bilgisidir.	| Z | 
|> Para Birimi	|paraBirimi	|AN3| Para birimi. FAST işlemleri kapsamında sadece TL gönderimi olacaktır. 	| Z |  
|Ödeme İste Talep Detayı	|talepDetayi	|Kompleks:TalepDetay|	| Z |  
|> Ödeme İste Akış Türü	|akisTur	|AN2|01: Kişiden Kişiye<br>02: İşyeri Ödemesi| Z | 
|> Ödeme Amacı	|odemeAmaci	|AN2|TR.OIS.DataCode.OdemeAmaci sıralı veri değerlerinden birini alır. Borçlu bu bilgiyi değiştiremeyecektir.Sadece alacaklı seçebilir.| Z | 
|> MCC Kodu	|mccKodu|AN1..4|Tripsit altında dokümanlar bölümünde yayınlanacaktır. Kurumsal API üzerinden çağırılan isteklerde gönderilmesi beklenen kategori kodu bilgisidir.| İ |  
|> Son Geçerlilik Zamanı (SGZ)	|sonGecerlilikZamani	|ISODateTime|Borçlu müşterinin Öİ talebine yanıt verebileceği son zaman bilgisidir. Bu zamandan sonra Öİ talebi geçersiz sayılacaktır. Sonra Kabul Hemen Öde akışı için Son Geçerlilik Zamanı Ödeme İste Oluşturulma Zamanından minimum 3 dakika öncesi maksimum 3 ay sonrası olacak şekilde seçilmelidir. İşyeri tarafından ödeme isteği oluşturulurken seçilir. | Z |  
|>Talep Edilen Ödeme Zamanı (TEÖZ)	|talepEdilenOdemeZamani	|ISODateTime| İşyerinin, ödeme iste talimatı içerisinde yer alan ve ödemenin yapılmasını talep ettiği tarih/zaman bilgisidir. **Sonra Kabul/Hemen Öde modelinde TEÖZ bilgisi gönderilmemelidir**.<br>TEÖZ tarih formatı:<br>YYYY-MM-DDThh:mm:ss. <br> **Şimdi Kabul/Sonra Öde ve Sonra Kabul/Sonra Öde** modellerinde işyeri tarafından ekranlardan saat seçimi yaptırılmıyorsa ilgili günün gün sonu 23:59:59+03:00 olarak gönderilmelidir. <br>TEÖZ, ödeme iste oluşturulma zamanından maksimum 6 ay sonrası seçilebilir.| K |  
|> Alacaklı İşlem Açıklaması	|alacakliIslemAciklamasi	|AN1..200|İşyeri tarafından Borçlu'ya iletilecek Açıklama bilgisidir.| İ |  
|> Kısmi Ödeme	|kismiOdeme	|AN1|Belirtilen tutardan daha az tutarda Öİ talebinin kabul edilmesine izin verildiği durumda E; izin verilmediği durumda H olarak gönderilmelidir. Tüm modellerde kullanılabilir. Sonra Öde modellerinde; TEÖZ öncesi yapılacak ödemelerde kısmi ödeme gerçekleştirilebilir. odemeErteleme = E olduğu durumda ise; TEÖZ sonrası kabul edilen Öİ taleplerinde kısmı ödeme gerçekleştirilemez. Kısmi ödeme bilgisi alacaklı tarafından gönderilir. Borçlu tarafından değiştirilememektedir.<br> E: Kısmi ödemeye izin verilir.<br> H: Kısmi ödemeye izin verilmez.| Z |  
|> Erken Ödeme	|erkenOdeme	|AN1|Öİ talebi oluşturulurken TEÖZ'den önce ödenmesine izin verildiği durumda E; izin verilmediği durumda H olarak gönderilmelidir. Sonra Kabul - Hemen Öde modelinde "E" olarak gönderilmelidir.<br> E: Erken ödemeye izin verilir.<br> H: Erken ödemeye izin verilmez. Ödeme iste talebi sadece TEÖZ tarihinde gerçekleştirilir.| Z | 
|> Ödeme Erteleme	|odemeErteleme	|AN1|Öİ talebi oluşturulurken TEÖZ sonra ödenmesine izin verildiği durumda E olarak gönderilmelidir. Vade tarihi bilgisinde ödeme yapılmasına olanak sağlar. Öİ talebi vadeTarihi, TEÖZ’den maksimum 3 ay sonrasına kadar ertelenmesine izin verilmelidir. Sonra Kabul - Hemen Öde modelinde "H" olarak gönderilmelidir. <br> E: Ödemenin ertelenmesine izin verilir.<br> H: Ödemenin ertelenmesine izin verilmez. | Z |  
|> Vade Planı	|vadePlani	|Kompleks:VadePlani[Array]|Ödeme Erteleme E ise gönderilmesi zorunludur. Vade planı listelenir. İlk fazda tek satır olarak gönderilmelidir.| K |  
|>> Vade Tarihi	|vadeTarihi	|ISODate|TEÖZ'den sonra ödeme yapılacak tarih bilgisidir. Vade tarihi TEÖZ’den ileri bir tarih olmalıdır. TEÖZ’den maksimum 3 ay sonrasına kadar ertelenmesine izin verilmelidir.| Z |  
|>> Vade Tutarı	|vadeTutari	|AN3|TEÖZ'den sonra kabul edilecek Öİ talebinde ödeme yapılması istenen tutar bilgisidir.| Z |  
|Ödeme İste Durum Bilgi	|durumBilgi	|Kompleks:DurumBilgi| | Z | 
|> Ödeme İste Durumu	|odemeIsteDurumu	|AN1|TR.OIS.DataCode.OdemeIsteDurumu sıralı veri tipini değerlerinden birini alır. Örn; ödeme iste'ye ait ilk istek mesajına dönüşte “B: Yanıt Bekleniyor” değerini alması beklenir. | Z | 
|> Ödeme İste İptal Detay Kodu	|odemeIsteIptalDetayKodu	|AN2|Rıza durumunun iptal olduğu durumda zorunludur. | K | 
|> Ödeme İste Oluşturulma Zamanı	|odemeIsteOlusturulmaZamani	|ISODateTime|Ödeme iste talebi'nin Borçlu ÖHS tarafından oluşturulduğu zaman bilgisidir. odemeIsteDurumu'nun "B" olduğu zaman için oluşacak bilgidir.| Z | 
|> Borçlu Kabul Zamanı	|kabulZamani	|ISODateTime|Kabul durumunda gönderilebilecektir. odemeIsteDurumu'nun "K" olduğu zaman için oluşacak bilgidir. | K | 
|> Ödeme Sistemi Gönderim Zamanı	|odemeSistemineGonderimZamani	|ISODateTime|Borçlu ÖHS tarafından ödemenin ödeme sistemine gönderilme zamanıdır. Borçlu müşteri kabul ettiği durumda iletilecektir. odemeIsteDurumu'nun "G" olduğu zaman için oluşacak bilgidir.| K | 
|> Borçlu ÖHS Ödeme Zamanı	|odemeZamani	|ISODateTime|Ödeme'nin gerçekleştiği zaman bilgisidir. odemeIsteDurumu'nun "O" olduğu zaman için oluşacak bilgidir.| K | 
|> Borçlu İptal Zamanı	|iptalZamani	|ISODateTime|İptal durumunda gönderilebilecektir. odemeIsteDurumu'nun "I" olduğu zaman için oluşacak bilgidir. | K | 
|Ek Bilgi | ekBilgi | Kompleks: ekBilgi[Array] | İşyerine tarafından gönderilmek istenen API deseninde yer almayan bilgiler gönderilmelidir. | İ |  
| > Anahtar	|anahtar	|AN1..200|Gönderilmesi istenen alanı açıklayıcı ifade. Örnek: FATURANO| İ | 
| > Değer 	|deger	|AN1..200| Gönderilmesi istenen alanın alacağı değer. Örnek: R0123456789| İ | 
|Ödeme İste Yanıt Detayı	|yanitDetayi	|Kompleks:YanıtDetayı|	 | K | 
|> Beklenen Ödeme Tarihi	|beklenenOdemeTarihi	|ISODate|Sonra öde seçeneklerinde Borçlu’nun ödemeyi taahhüt ettiği tarih bilgisidir. Ödeme Erteleme yapıldığı durumda beklenen ödeme tarihi, vade tarihi olarak gönderilmelidir. | K | 
|> Borçlu İşlem Açıklaması	|borcluIslemAciklamasi	|AN1..200| İşyeri tarafından iletilen alacaklı açıklama alanı Borçlu ÖHS ekranlarında borçlu müşteriye birebir gösterilmelidir. Borçlu müşteri tarafından değişiklik yapılabilmesi sağlanmalıdır. Borçlu müşteri tarafından değişiklik yapılmadığı durumda işyeri tarafından girilen işlem açıklaması borçlu işlem açıklaması olarak kabul edilir. Borçlu müşterinin ilgili Öİ talebine red verdiği durumda müşteri tarafından bilgi girişi yapılırsa iptal açıklama alanı olarak Alacaklı ÖHS'ye bu alan iletilir. | K |
|> Kabul Edilen Tutar	|kabulEdilenTutar	|AN1..24|Müşterinin Öİ isteğini kabul ettiği tutar bilgisidir. Kısmi ödeme yapıldığı durumda kısmi ödeme tutarı, ödeme erteleme yapıldığı durumda ise vade seçeneklerindeki vade tutar bilgisi gönderilmelidir. Bunların dışında ise tutar bilgisi gönderilmelidir. Kabul Edilen Tutar alanı regex patterni şu şekildedir: '^\d{1,18}$\|^\d{1,18}\\.\d{1,5}$' | K |