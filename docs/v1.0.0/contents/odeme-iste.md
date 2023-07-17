# 7.	Ödeme İste

## Genel Bilgiler

Alacaklı ÖHS; alacaklı müşterinin “Ödeme İste” talebi için OdemeIsteTalebi nesnesi ile Borçlu ÖHS’nin sunacağı ödeme iste erişim adresine bir POST isteğinde bulunur ve Borçlu tarafta bir OdemeIste nesnesi oluşturulur. Borçlu ÖHS ödeme istenin durumunu belirten bir statü döner(odemeIsteDurumu).Ödeme İste talebi borçlu müşterinin kabulü sonrası havale ya da FAST işlemiyle sonuçlanabilir. 

Ödeme İste Talebi 6 temel akışdan oluşur:

**1.** Alacaklı Müşterinin Borçlu Müşteriden Ödeme İste için talepte bulunması: Alacaklı müşteri ÖHS mobil uygulama ya da web uygulamasından zorunlu alanların seçimini ve girişini yaparak ödeme iste talebi başlatır.

**2.**	Ödeme İste Talebinin Hazırlanması: Alacaklı ÖHS, “Ödeme İste” talebi için zorunlu alanları doldurarak Borçlu ÖHS’ye iletir.

**3.**	Ödeme İste Talebinin Yanıtlanması: Borçlu ÖHS, müşterisine Ödeme İste Talebini bildirim aracılığı ya da kendi belirleyeceği metotlar ile yönlendirir. Müşteriyi doğruladıktan sonra ödeme iste talebine ait detaylı bilgileri gösterip  Kabul ya da Red seçeneklerinin Son Geçerlilik Zamanına kadar yanıt dönebilmesine olanak sağlar. 

**4.**	Ödeme İste Kabul ya da Red Yanıtının İletilmesi: Borçlu ÖHS,müşteriden alınan yanıtı OdemeIsteYanit Nesnesi ile Alacaklı ÖHS’ye bildirir.

**5.**	Ödeme İste Talebinin Ödeme Sistemine İletilmesi: 4.adımda Kabul statüsü iletildiği durumda;Borçlu ÖHS, Borçlu müşteriden olumlu yanıt aldığı durumda Alacaklı ÖHS’ye Ödeme İste talebinin kabul edildiğine dair bildirim yapar. Aynı zamanda ödeme işlemini FAST ya da Havale ile gerçekleştirmek üzere ilgili sistemlere aktarır.

**6.**	Ödeme İste Gerçekleşti ya da İptal Yanıtının İletilmesi: FAST ya da Havale sistemlerine aktarılan Ödeme İste talebi başarılı olması durumunda ödeme gerçekleşir ve ödeme iste durumu güncellenir. Borçlu ÖHS tarafından OdemeIsteYanit nesnesi ile alacaklı ÖHS bilgilendirilir. Başarısız olması durumunda da iptal statüsü ile Alacaklı ÖHS bilgilendirilir.




## Ödeme İste Hizmeti için Erişim Adresleri (Endpoints)

**Tablo 7: Ödeme Emri Başlatma Hizmeti İçin Erişim Adresleri**

**Etki Alanı (Scope) ="odeme_iste"**

|No  |Kaynak |HTTP işlemi|Erişim Adresi |Zorunlu / İsteğe Bağlı|Yetkilendirme Türü |İmzalama |İstem Nesnesi |Yanıt Nesnesi |ÖHS Rolü |
| --- |--- |--- |--- |--- |--- |--- |--- |--- |--- |
| 1 | odeme-iste | POST | /odeme-iste | Z | İstemci Kimlik Bilgileri | İmzalı İstek ve Yanıt | OdemeIsteTalebi | OdemeIste | Borçlu 
| 2 | odeme-iste | GET |  /odeme-iste/{odemeIsteRefNo} | Z | İstemci Kimlik Bilgileri | İmzalı Yanıt |  | OdemeIste | Borçlu |
| 3 | odeme-iste | DELETE |  /odeme-iste/{odemeIsteRefNo} | Z | İstemci Kimlik Bilgileri |  |  |  | Borçlu |
| 4 | odeme-iste-yanit | PUT |  /odeme-iste-yanit/{odemeIsteRefNo}| Z | İstemci Kimlik Bilgileri | İmzalı İstek  | OdemeIsteYaniti |  | Alacaklı |
| 5 | sistem-olay-dinleme | POST |  /sistem-olay-dinleme	 | Z | İstemci Kimlik Bilgileri | - | Olay | - |Bu endpoint sadece BKM tarafından çağırılacaktır. |
## 7.1. ADIM 0: Alacaklı'nın Borçlu’ya Ödeme İste talebinde bulunması:

Borçlu, ÖHS uygulamasında (mobil Uygulama/ web arayüzü) Ödeme İste için Alacaklı’ya talepte bulunur.

## 7.2. ADIM 1: Ödeme İsteğinin Oluşturulması

Alacaklı ÖHS ile Alacaklı IBAN bilgileri uyumlu olmalıdır. Alacaklı IBAN bilgisinin Alacaklı ÖHS koduna ait olduğu kontrolü Borçlu tarafından yapılmalıdır.

**Şekil 7 : Ödeme İsteğinin Hazırlanması**

<img src="./images/img/OdemeIsteOdemeHazirlik.png" width="80%" >

-	Alacaklı ÖHS, uygulamadan borçlu bilgilerini (Borçlu tarafından hesap bilgisi (Ad Soyad, IBAN) olarak paylaşılabileceği gibi TR     Karekod veya Kolay Adres şeklinde de paylaşılabilir) girerek ödeme iste (odemeIste) talebinde bulunur.
-	POST isteği TLS protokolü tesis edilen iletişim katmanı üzerinden gerçekleştirilir. TLS için nitelikli sertifikalar kullanılır.
-	POST isteğinin başlığındaki alanlar ve istemcinin sertifikasındaki özel alanlar kullanılarak istemcinin yetkilendirilmesi sağlanır:
    -   İstekte bulunan ÖHS yetkilendirilmiş mi?
    -   İstekte bulunulan ÖHS kodu doğru mu?
-	POST başarılı olursa, Borçlu ÖHS, Ödeme İste talebi için ödeme durumunu içeren odemeIsteDurumu yanıt olarak döner.
-	Alacaklı ÖHS tarafında odemeIsteDurumu değişkeninin durumu “Yanıt Bekleniyor” olarak güncellenir.

**POST /odeme-iste**

İSTEK:<br>
Alacaklı ÖHS, bu API erişim adresinden Borçlu ÖHS’ye yeni bir OdemeIsteTalebi oluşturulması için istekte bulunur:
-	Alacaklı ÖHS, yaptığı ödeme iste talebi içersinde benzersiz “odemeIsteRefNo” referans numarasını Borçlu ÖHS’ye iletir. 
Ödeme İste referans numarası Alacaklı ÖHS tarafından oluşturulmalıdır. Ödeme İste Referans Numarası'nın son 6 karakteri, alacaklı ile borçlu müşteriye işlem sırasında ilgili ekranlarda gösterilmelidir. Alacaklıya Ödeme İste talebi oluşturulacağı ekranda, borçluya ise ödeme iste detayının verildiği ekranda gösterilmelidir.
ÖnerilenFormat:
{alacakliOhsKodu}-{guid}
Örn: 8000- f534e8f2-9fbf-48cc-914b-12fbaffd8104 (size: 41)

-	**Sonra Kabul Hemen Öde** Akışında  Alacaklı ÖHS tarafından iletilecek olan Son Geçerlilik Zamanı (SGZ) min. 3 dakika max. 90 gün olmalıdır. Alacaklı ÖHS tarafından Son Geçerlilik Zamanı 90 günden fazla ya da 3 dakikadan az iletilirse Borçlu ÖHS tarafından;
**TR.OIS.Business.InvalidExpireTime** hatası verilmelidir.

- 	Alacaklı ÖHS, ödeme iste talebini Borçlu ÖHS’ye bildirir. Borçlu müşterinin ödeme iste yetkisinin olmaması durumunda borçlu ÖHS tarafından; **TR.OIS.Business.RestrictedAccount** hatası verilmelidir.

- 	Alacaklı ÖHS kendisine gelen Ödeme İste talebinde Alacaklı müşteri tarafında hesap yetkisi veya limit konusuyla ilgili kontrolleri sağlaması durumunda hata verilmesi ya da Ödeme İste talebinin devam ettirilmesi kendi inisiyatifindedir. Hata verilmesi durumunda **TR.OIS.Business.SenderRestrict** hatası dönülmelidir. Hata verilmez ve Ödeme İste nesnesi oluşturulduktan sonra Borçlu müşteri tarafından kabul yanıtı verilmesi ile limit ve yetki kontrolüne takılabilir. Bu durumda Ödeme İste talebinin iptal edilmesi ve uygun iptal detay kodu ile dönülmesi sağlanabilir ya da Ödeme İste talebini iptal etmeyip SGZ’ye kadar Ödeme İste talebini gösterip borçlu müşterinin limit ve yetki durumlarını güncelleyerek ilgili talebin onaylanması sağlanabilir. Bu tercihler ÖHS inisiyatifindedir.

- 	Borçlu ÖHS, Alacaklı ÖHS tarafından gönderilen Ödeme İste talebi istek mesajında yer alan alanların  API dokümanında belirtilen şartları sağlayacak şekilde zorunluluk, uzunluk ve içerik kontrollerini yapar. (Zorunlu) 
- 	Kontrollere istinaden hata oluşması durumunda TR.OIS.Resource.InvalidFormat hata kodu iletilmeli ve fieldErrors dolu olacak şekilde hatalı alanı belirten detaylı açıklama gönderilmelidir. **InvalidFormat hata kodlarında fieldErrors içeriği gönderilmeli ve anlaşılır açıklama ile message, messageTr alanları doldurulması zorunludur.**
- **TR.OIS.Business.InvalidContent** hatası Borçlu ÖHS tarafından yapılacak iş kuralı kontrollerinin başarısız olduğu durumda verilmelidir.
- Alacaklı ve Borçlu Hesap bilgileri ile ilgili kontroller yapılmalıdır. (Zorunlu)
- Alacaklı müşteriye ait IBAN bilgisi içerisindeki kurum kod ile katılımcı Bilgi içerisindeki alacaklı ÖHS kod bilgisi eşleşmemesi durumunda ; **TR.OIS.Business.RecipientAccountMismatch** hatası verilmelidir.
- Borçlu IBAN bilgisi Borçlu ÖHS tarafından kontrol edilmeli.İlgili IBAN kendi kurumuna ait değilse; **TR.OIS.Business.SenderAccountMismatch** hatası verilmelidir.
-	İlgili IBAN kendi kurumuna ait ancak borçlu unvan bilgisi ile uyuşmaması durumunda ; **TR.OIS.Business.InvalidSenderTitle** ,ilgili IBAN kendi kurumuna ait ancak kapalı bir hesap olması durumunda ; **TR.OIS.Business.InvalidSenderAccount** hatası verilmelidir.
- 	Borçlu ÖHS, ödeme iste talebi için tüm kontrollerin geçerli olması durumunda ödeme iste durumunu “Yanıt Bekleniyor” olarak kaydeder ve 201 yanıtını döner.
-   Alacaklı ÖHS, ödeme iste talebi Borçlu ÖHS de oluşturulduğu anda durumunu “Yanıt Bekleniyor” olarak kaydeder.
- 	Borçlu ÖHS kendisine gelen Ödeme İste talebini müşterisine anlık bildirim olarak gönderir. Anlık bildirimler ÖHS tarafından iletilecek SMS ya da push notifikasyon olabilir. Müşterinin iletişim tercihi birincil iletişim kanalı olmak üzere en azından SMS ile bilgilendirme yapılması beklenmektedir. 
- 	Borçlu Müşteri tarafından Ödeme İste Talebi onaylandığında Borçlu ÖHS durumunu “Kabul Edildi” olarak günceller ve Alacaklı ÖHS’ye OdemeIsteYanit nesnesi ile güncel durumu bildirir. (B->K)
- 	Borçlu müşteri tarafından Ödeme İste talebi iptal edilirse Borçlu ÖHS durumunu İptal Edildi” olarak günceller ve Alacaklı ÖHS’ye OdemeIsteYanit nesnesi ile güncel durumu bildirir. (B->I)
-  Alacaklı ÖHS olarak borçlu ÖHS'den kabul ya da red durum değişikliği bildirimi geldiğinde Alacaklı ÖHS'nin müşterisini bilgilendirmesi zorunludur.
- 	Alacaklı ÖHS; 504 hata yanıtı alması durumunda işlemin Borçlu ÖHS’de gerçekleşme durumu belirsizdir. Bu durumda alacaklı ÖHS GET/odeme-iste/{odemeIsteRefNo} ile sorgulama yapar. Sorgulama adeti 1 dakika içerisinde max. 3 defa olacak şekilde gerçekleşir. Başarılı yanıt alması durumunda ödeme iste durumunu kendi tarafında günceller. 3.denemeden sonra hala hata alması durumunda DELETE /odeme-iste/{odemeIsteRefNo} isteği yapar ve ödeme isteğini iptale çeker.  Borçlu tarafta kendisine gelen DELETE isteği ile ilgili ödeme iste talebini iptale çeker. DELETE işlemi sırasında hata alınması durumunda alacaklı taraf yine iptale çekmelidir.


**BAŞARILI İSTEK ve YANIT :**

**Tablo 8: OdemeIsteTalebi ve Odeme Iste Nesnesi**

**Z: Zorunlu, K: Koşullu, İ: İsteğe Bağlı, N/A: Yok**

|Alan Adı |Json Alan Adı |Format: Veri Modeli İsmi |Açıklama|İstek |Yanıt |FAST A01 Mesaj Mapping |
| --- | --- | --- | --- | --- | --- | --- |
|Katılımcı Bilgisi | katilimciBilgi | Kompleks:KatilimciBilgisi | Katılımcılara atanmış kod bilgileridir.	 | Z | Z |  |
| > Alacaklı ÖHS Kod	|alacakliOhsKod	|AN4| Alacaklı ÖHS’ye ait kuruluş kodu	| Z | Z | |
| > Borçlu ÖHS Kod	|borcluOhsKod	|AN4| Borçlu ÖHS’ye ait kuruluş kodu	| Z | Z | |
|Alacaklı Bilgisi	|alacakliBilgi	|Kompleks:AlacakliBilgi| Alacaklıya ait bilgilerdir.	| Z | Z | |
| > Alacaklı Hesap/Müşteri Tipi	| musteriTipi	|AN1| Alacaklı müşterinin hesap numarasına ilişkin Kurumsal-Bireysel hesap bilgisi ayrımının belirtildiği alandır.  Ödeme İste Sistemi'nde tanımlı değerlerden biri olmalıdır.<br>B:Bireysel <br>K: Kurumsal| Z | Z | |
| > Kimlik	|kimlik	|Kompleks:Kimlik| 	| Z | Z | |
|  >> Alacaklı Kimlik Tipi	|kimlikTipi	|AN1| TR.OIS.DataCode.KimlikTur sıralı veri türü değerlerinden birini alır.| Z | Z | |
|  >> Alacaklı Kimlik No ( TCKN/VKN/YKN/Pasaport No ) |kimlikDegeri|AN7..11| Alacaklı müşteriye ait geçerli bir TC Kimlik Numarası, Vergi Kimlik Numarası, Yabancı Kimlik Numarası ya da Pasaport Numarası bilgilerinden birinin bulunduğu alandır.| Z | Z | AlKmlkN |
| > Hesap	|hesap	|Kompleks:Hesap| 	| Z | Z | |
|  >> Alacaklı Ad Soyad/Ticari Unvan |hesapSahibi	|AN3..140| Alacaklı müşterinin ad-soyad veya ticari ünvan bilgisidir. <br>İşyeri için ilgili acquirer üye tarafından tahsis edilmiş olan işyeri adı bilgisidir.(Merchant Name) İşyerinin sık kullanılan adı ya da tabela ünvanı olmalıdır.<br> Alfanumerik karakterler, '.' , '-' , '&' ve boşluk karakteri içerebilir.Borçlu ÖHS’ye Alacaklı ÖHS tarafından Unvan bilgisi açık bir şekilde iletilmelidir. Borçluya ÖHS ekranlarında gösterimi açık olmalıdır.| Z | Z |AlAd|
|  >> Alacaklı IBAN	|hesapNo	|AN26| Alacaklı müşteriye ait bir IBAN olmalıdır. TR ile başlamalı ve 26 karakter uzunluğunda iletilmelidir.Borçlu ÖHS’ye Alacaklı ÖHS tarafından IBAN açık bir şekilde iletilmelidir. Borçluya ÖHS ekranlarında gösterimi açık olmalıdır.| Z | Z |AlHesN |
|Borçlu Bilgisi	|borcluBilgi	|Kompleks:BorcluBilgi| Borçluya ait bilgilerdir.	| Z | Z | ||Borçlu Bilgisi	|borcluBilgi	|Kompleks:BorcluBilgi| Borçluya ait bilgilerdir.	| Z | Z | |
| > Hesap	|hesap	|Komlepks:Hesap|	| Z | Z | |
| >> Borçlu Ad Soyad/Ticari Unvan	|hesapSahibi	|AN3..140| Borçlu müşterinin ad-soyad veya ticari ünvan bilgisidir.İşyeri için ilgili acquirer üye tarafından tahsis edilmiş olan işyeri adı bilgisidir.(Mercant Name)İşyerinin sık kullanılan adı ya da tabela ünvanı olmalıdır.Alfanumerik karakterler, '.' , '-' , '&' ve boşluk karakteri içerebilir.| Z | Z | |
| >> Borçlu IBAN |hesapNo	|AN26|Borçlu müşteriye ait bir IBAN olmalıdır. TR ile başlamalı ve 26 karakter uzunluğunda iletilmelidir. Borçlu IBAN gönderimi zorunludur. Borçlu IBAN bilgisi borçlu müşteri tarafından değiştirilebilir.Bu sebeple istekte iletilen IBAN bilgisi alacaklı ÖHS tarafından kontrol edilmemelidir.	| Z | Z | |
| > KOLAS Referans Numarası	|kolasRefNo	|N12| Kolay Adres bilgisi ile başlatılan Ödeme İste taleplerinde, Borçlu müşteriye ait Kolay Adres bilgisine ait hesap bilgisine erişebilmek amacıyla Alıcı müşterinin Ödeme Hizmet Sağlayıcısı tarafından KOLAS’a iletilen Alıcı Sorgu mesajına KOLAS tarafından dönülen referans numarasıdır. 	| K | K | |
| > TR Karekod Referans Numarası	|karekodRefNo	|AN1..12|TR Karekod ile başlatılan Ödeme İste taleplerinde TR Karekod için oluşturulan tekil referans numarasıdır. İşyeri uygulaması veya TR Karekod üreticisi tarafından sağlanır ve uçtan uca doğrulama, işlem kaydı veya fiş oluşturmada kullanılır. 	| K | K | |
|Tutar Bilgileri	|tutarBilgi	|Kompleks: TutarBilgi|	| Z | Z | |
|> Tutar	|tutar	|AN1..24| Alacaklı ÖHS’nin önyüzde kullanıcıdan aldığı tutar bilgisidir.	| Z | Z |Ttr |
|> Para Birimi	|paraBirimi	|AN3| Para birimi. FAST işlemleri kapsamında sadece TL gönderimi olacaktır. 	| Z | Z | |
|Ödeme İste Talep Detayı	|talepDetayi	|Kompleks:TalepDetay|	| Z | Z | |
|> Ödeme İste Referans Numarası	|odemeIsteRefNo	|AN41|Ödeme İste sistemi numarasıdır.Alacaklı ÖHS tarafından oluşturulmalıdır. Ödeme İste Referans Numarası'nın son 6 karakteri, alacaklı ile borçlu müşteriye işlem sırasında ilgili ekranlarda gösterilmelidir.Alacaklıya Ödeme İste talebi oluşturulacağı ekranda, borçluya ise ödeme iste detayının verildiği ekranda gösterilmelidir. <br>Önerilen Format:  <br>{alacakliOhsKodu}-{guid}  <br>Örn: 8000- f534e8f2-9fbf-48cc-914b-12fbaffd8104    (size: 41)| Z | Z | OiRef|
|> Ödeme İste Oluşturulma Zamanı	|odemeIsteOlusturulmaZamani	|ISODateTime|Kaydın ilk oluşturulduğu gün ve zaman bilgisini içerir. YYYY-MM-DDThh:mm:ss+03:00 formatında Ödeme İste Sistemi tarafından oluşturulur. | Z | Z | |
|> Ödeme İste Akış Türü	|akisTur	|AN2|01: Kişiden Kişiye<br>02: İşyeri Ödemesi| Z | Z |OiAksTur |
|> Ödeme Amacı	|odemeAmaci	|AN2|TR.OIS.DataCode.OdemeAmaci sıralı veri değerlerinden birini alır. Borçlu bu bilgiyi değiştiremeyecektir.Sadece alacaklı seçebilir.| Z | Z |OdmAmc |
|> Son Geçerlilik Zamanı (SGZ)	|sonGecerlilikZamani	|ISODateTime|Borçlu’nun Öİ talebine yanıt verebileceği son zaman bilgisidir. Bu zamandan sonra Öİ talebi geçersiz sayılacaktır. Son geçerlilik zamanı Öİ Oluşturulma Zamanından en fazla 3 ay sonrası olabilir.Alacaklı müşteri tarafından ödeme isteği oluşturulurken seçilir.<br>Bugün : 31.11.2019<br>Bugün + 3 Ay : 29.02.2020<br>Bugün : 30.09.2022<br>Bugün + 3 Ay : 30.12.2022<br>Bugün : 14.07.2022<br>Bugün + 3 Ay : 14.10.2022 | Z | Z | |
|>Talep Edilen Ödeme Zamanı (TEÖZ)	|talepEdilenOdemeZamani	|ISODateTime| Alacaklı’nın, Öİ talimatı içerisinde yer alan ve ödemenin yapılmasını talep ettiği tarih/zaman bilgisidir.Hemen Öde seçeneğinde TEÖZ bilgisi boş iletilmelidir.Dolu iletilmesi durumunda borçlu ÖHS tarafından hata mesajı üretilmelidir.<br>TEÖZ tarih formatı:<br>YYYY-MM-DDThh:mm:ss| K | K | |
|> Alacaklı İşlem Açıklaması	|alacakliIslemAciklamasi	|AN1..200|Alacaklı tarafından Borçlu'ya iletilecek Açıklama bilgisidir.| İ | İ | |
|> Borçlu İşlem Açıklaması	|borcluIslemAciklamasi	|AN1..200| Alacaklı ÖHS tarafından iletilen alacaklı açıklama alanı Borçlu ÖHS ekranlarında borçlu müşteriye birebir gösterilmelidir. Borçlu müşteri tarafından değişiklik yapılabilmesi sağlanmalıdır.Borçlu Açıklama bilgisi FAST mesajına taşınacaktır.| NA | K |Acklm |
|Ödeme İste Yanıt Detayı	|yanitDetayi	|Kompleks:YanıtDetayı|	| NA | Z | |
|> Ödeme İste Durumu	|odemeIsteDurumu	|AN1|TR.OIS.DataCode.OdemeIsteDurumu sıralı veri tipini değerlerinden birini alır. Örn; ödeme iste'ye ait ilk istek mesajına dönüşte “B: Yanıt Bekleniyor” değerini alması beklenir.| NA | Z | |
|> Ödeme İste İptal Detay Kodu	|odemeIsteIptalDetayKodu	|AN2|Rıza durumunun iptal olduğu durumda zorunludur.| NA | K | |
|> Borçlu Yanıt Zamanı	|borcluYanitZamani	|ISODateTime|Kabul ya da red durumunda gönderilebilecektir.| NA | K | |
|> Beklenen Ödeme Tarihi	|beklenenOdemeTarihi	|ISODate|Borçlu’nun ödemeyi taahhüt ettiği tarih bilgisidir. Sonra öde seçeneklerinde Borçlu’nun ödeme yapacağı tarih bilgisidir. Hemen öde seçeneklerinde ise Borçlu’nun kabul ettiği tarih bilgisidir.| NA | K | |
|> Ödeme Sistemi Gönderim Zamanı	|odemeSistemineGonderimZamani	|ISODateTime|Borçlu ÖHS tarafından ödemenin ödeme sistemine gönderilme zamanıdır.| NA | K | |

**Z: Zorunlu, K: Koşullu, İ: İsteğe Bağlı, N/A: Yok**

## 7.3. ADIM 2: Ödeme İsteğinin Sorgulanması

**Şekil 8 : "OdemeIste" nesnesinin sorgulanması(isteğe bağlı)**

<img src="./images/img/OdemeIsteOdemeSorgulama.png" width="80%" >

**GET /odeme-iste/{ odemeIsteRefNo }**

- Alacaklı, ödeme isteğinin mevcut durumunu kontrol etmek için, oluşturulan bir OdemeIste kaynağının durumunu isteğe bağlı olarak alabilir. 
- Genel olarak servis çağrımlarında oluşabilecek timeout hataları nedeniyle alacaklı ve borçlu ÖHS’de ödeme iste durum farklılıklarının önüne geçilebilmesi için günlük belirli zaman aralıklarında sorgulama yapılması ve ödeme iste durumunun eşlenik olması sağlanmalıdır.

**Durum**

OdemeIste kaynağı için kullanılabilecek durum göstergeleri şu şekildedir:

-	Yanıt Bekleniyor
-	Kabul Edildi
-	Ödeme Gerçekleşti
-	İptal Edildi

## 7.4. ADIM 3: Ödeme İste Yanıtı

- 	Borçlu ÖHS tarafından ödeme iste durum değişikliklerinin Alacaklı ÖHS’ye bildirilmesi için kullanılacak olan servistir. İşlem açıklaması ve borçluya ait hesap bilgileri borçlu müşteri tarafından ödeme iste talebinin kabul edileceği anda değiştirilebilmektedir. İşlem açıklaması borçlu müşteriye alacaklı ÖHS’den geldiği gibi gösterilmelidir. Borçlu müşteri açıklamayı güncellemesi durumunda güncel açıkla “borcluAciklama” alanında Alacaklı ÖHS’ye iletilir. Borçlu müşterinin açıklama alanında değişiklik yapmaması durumunda Alacaklı ÖHS’nin ilettiği açıklama bilgisi “borcluAciklama” alanında Alacaklı ÖHS’ye iletilir. Açıklamada değişiklik bilgisinin alacaklı müşteriye gösterilmesi Alacaklı ÖHS inisiyatifindedir.

- Borçluya ait ödeme yapılacak hesap bilgisi değiştirilirse Alacaklı ÖHS’ye yanıt nesnesi içerisinde iletilmeyecektir. 

- Borçlu ÖHS , FAST sistemine ödeme iste talebini ilettikten sonra işlemin başarılı ya da başarısız olması durumlarında FAST sisteminden hem Alacaklı hem Borçlu ÖHS’ye olumlu ya da olumsuz mesaj gitmesi beklenmektedir. Aynı zamanda Borçlu ÖHS ; K durumundan “O” durumuna ya da “I” durumuna geçen ödeme iste durumlarını Alacaklı ÖHS’ye bildirir. Alacaklı ÖHS’ye hem FAST sisteminden hem de Borçlu ÖHS tarafından güncel ödeme iste durum bilgileri iletilmiş olacaktır. Ödeme sistemine gönderilmiş bir işlem Borçlu ÖHS’de borçlu müşteri tarafından iptal edilemez. Borçlu ÖHS’de bu kontrolün sağlanması gerekmektedir.
- 	Borçlu müşterinin ödeme iste talebini reddettiği durumda ise  Borçlu ÖHS “odemeIsteDurumu”: “I” ve “odemeIsteIptalDetayKodu” : “01”- Borçlu Ödeme İsteğini Reddetti olacak şekilde Alacaklı ÖHS’ye istek yapar ve Alacaklı ÖHS tarafından 202-Accepted yanıtının alındığı görülür.

- 	Borçlu ÖHS’de; borçlu müşteri kendisine gelen ödeme iste talebini kabul etmesi durumunda OdemeIsteYanit nesnesi ile Alacaklı ÖHS’ye “odemeIsteDurumu” : “K” (Kabul Edildi) olacak şekilde bir istek yapılır. OdemeIsteYanit nesnesi ile bildirim yapılmasıyla birlikte ödeme iste talebi FAST ya da havale sistemlerine aktarılır. **Ödeme sistemlerine aktarım için PUT/odeme-iste-yanit isteği için Alacaklı ÖHS’den gelecek yanıta (202,4**,5**) bakılmasına ya da beklenmesine gerek bulunmamaktadır.**

-	Ödeme sistemlerine aktarıldıktan sonra FAST sisteminde işlem gerçekleşmesi durumunda borçlu ve alacaklı ÖHS tarafında ödeme iste durumu “O” (Ödeme Gerçekleşti) olarak güncellenir. Alacaklı ÖHS iki yöntem ile ödemenin gerçekleştiğinden bilgisi olur. Bu iki bilgiden herhangi birinin gelmesi durumunda Alacaklı ÖHS tarafından Ödeme İste Durumu “O” olarak güncellenir. FAST sisteminden olumlu yanıt gelmesi ile alacaklı ÖHS tarafında “O” statüsüne çekildikten sonra Borçlu ÖHS tarafından “O” statüsü değişiklik bildirimi gelmesi durumunda statü aynı şekilde korunmalıdır. Borçlu ÖHS’den durum değişikliğinin FAST sisteminden olumlu sonuçtan önce gelmesi durumunda da aynı durum geçerlidir.
    - FAST sisteminden alacaklı ÖHS’ye olumlu sonucun iletilmesi, 
    - Borçlu ÖHS tarafından OdemeIsteYanit nesnesi ile “O” statüsünün iletilmesi.
- 	Borçlu ÖHS tarafından OdemeIsteYanit Nesnesi ile “O” durumu iletildiğinde Alacaklı ÖHS tarafından 4** ya da 5**’lü hatalar alınması durumunda FAST mesajından gelecek olumlu yanıt ile kendi tarafında ödeme iste durumunu “O” olarak günceller.
Her iki şekilde iletilebilecek olan ödeme durum bilgisinin Alacaklı ÖHS’ye hiç gelmemesi durumunda Alacaklı ÖHS tarafından odemeIsteRefNo ile GET sorgusu yapılmalıdır.
- 	Borçlu ÖHS’nin ödeme iste talebini FAST’a iletmesi , Alacaklı FAST sisteminin çalışmaması halinde FAST işlemi gerçekleşmeyecektir. FAST sisteminden de Alacaklı ÖHS’ye iletilen mesaj da alınamayacakır. Borçlu ÖHS FAST sisteminden gelen mesaj (olumsuz,zaman aşımı vb.) ile ödeme iste durumunu “I” , odemeIsteIptalDetayKodu’nu ise “21” olacak şekilde güncellemelidir. Güncellenen ödeme iste durumu OdemeIsteYanit nesnesi ile Alacaklı ÖHS’ye bildirilmelidir. Bildirilememesi durumunda Alacaklı ÖHS güncel statüyü alabilmek için OdemeIsteRefNo ile GET sorgusu yapmalıdır.
- 	Borçlu ÖHS’nin ödeme iste talebini FAST’a iletmesi, Alacaklı tarafında FAST mesajının doğrulanamaması durumunda FAST işlemi gerçekleşmeyecektir. FAST sisteminden hem alacaklı ÖHS hem borçlu ÖHS’ye olumsuz mesaj iletilecektir. Alacaklı ve Borçlu ÖHS FAST sisteminden gelen olumsuz mesaj ile ödeme iste durumunu “I” , odemeIsteIptalDetayKodu’nu ise “21” olacak şekilde güncellemelidir.
Borçlu tarafında ödeme iste durumu değiştiği için güncel bilgi OdemeIsteYanit nesnesi ile Alacaklı ÖHS’ye bildirilmelidir



**BAŞARILI İSTEK:**

PUT işleminin REQUEST gövdesini (BODY) oluşturan "OdemeIsteYaniti" nesnesi Tablo-9’daki parametrelerden oluşur:

**Şekil 9: "OdemeIsteYaniti"**

<img src="./images/img/OdemeIste.png" width="80%" >


**Tablo 9: OdemeIsteYaniti Nesnesi**

|Alan Adı |Json Alan Adı |Format: Veri Modeli İsmi |Açıklama|İstek |
| --- | --- | --- | --- | --- |
|Katılımcı Bilgisi | katilimciBilgi | Kompleks:KatilimciBilgisi | Katılımcılara atanmış kod bilgileridir.	 | Z |
| > Alacaklı ÖHS Kod	|alacakliOhsKod	|AN4| Alacaklı ÖHS’ye ait kuruluş kodu	| Z | 
| > Borçlu ÖHS Kod	|borcluOhsKod	|AN4| Borçlu ÖHS’ye ait kuruluş kodu	| Z |
| Ödeme İste Referans Numarası	|odemeIsteRefNo	|AN41|Ödeme İste sistemi numarasıdır.Alacaklı ÖHS tarafından oluşturulmalıdır. Ödeme İste Referans Numarası'nın son 6 karakteri, alacaklı ile borçlu müşteriye işlem sırasında ilgili ekranlarda gösterilmelidir.Alacaklıya Ödeme İste talebi oluşturulacağı ekranda, borçluya ise ödeme iste detayının verildiği ekranda gösterilmelidir. <br>Önerilen Format:  <br>{alacakliOhsKodu}-{guid}  <br>Örn: 8000- f534e8f2-9fbf-48cc-914b-12fbaffd8104    (size: 41)| Z |
| Ödeme İste Durumu | odemeIsteDurumu | AN1 | "B": borçludan yanıt bekleniyor<br>"K": borçlu kabul etti. <br>"O": ödeme sistemine emir iletildi. <br>"I": iptal.| Z |
| Ödeme İste İptal Detay Kodu | odemeIsteIptalDetayKodu | AN2 | "iptalDetay" : "01" borçlu ödeme isteğini red etti.B durumdayken B->I <br>"iptalDetay" : "02" borçlu beklenen sürede ödeme isteğine yanıt vermedi. B durumdayken B->I<br>"iptalDetay" : "03" borçlu iptal etti. K durumdayken K->I<br>"iptalDetay" : "04" beklenen sürede ödeme sistemine emir iletilmedi. K -> I<br>"iptalDetay" : "05" borçlu ÖHS fraud nedeniyle iptal etti. B,K -> I<br>"iptalDetay" : "11" alacaklı ödeme iste talebinden vazgeçti. B,K -> I<br> "iptalDetay" : "12" alacaklı ÖHS fraud nedeniyle iptal etti. B,K -> I| K |
| Borçlu Yanıt Zamanı | borcluYanitZamani | ISODateTime | Kabul ya da red durumunda gönderilebilecektir. | K |
| Beklenen Ödeme Tarihi | beklenenOdemeTarihi | ISODate | Borçlu’nun ödemeyi taahhüt ettiği tarih bilgisidir. Sonra öde seçeneklerinde Borçlu’nun ödeme yapacağı tarih bilgisidir. Hemen öde seçeneklerinde ise Borçlu’nun kabul ettiği tarih bilgisidir.  | K |
| Ödeme Sistemi Gönderim Zamanı | odemeSistemineGonderimZamani | ISODateTime | Borçlu ÖHS tarafından ödemenin ödeme sistemine gönderilme zamanıdır. | K |
|Borçlu İşlem Açıklaması	|borcluIslemAciklamasi	|AN1..200|Alacaklı ÖHS tarafından iletilen alacaklı açıklama alanı Borçlu ÖHS ekranlarında borçlu müşteriye birebir gösterilmelidir. Borçlu müşteri tarafından değişiklik yapılabilmesi sağlanmalıdır.Borçlu müşterinin değişiklik yapması veya yapmaması durumunda açıklama bilgisi Borçlu ÖHS tarafından bu alana işlenmelidir.Borçlu Açıklama bilgisi FAST mesajına taşınacaktır.| K |
**BAŞARILI YANIT:**

Başarılı PUT isteği sonucu HTTP 202 Accepted ile dönülmelidir.

## 7.5. ADIM 4: Ödeme İste İptal Senaryosu

**Şekil 10: "OdemeIste" İptalinin sağlanması**

<img src="./images/img/OdemeIsteIptal.png" width="80%" >

Ödeme iste talebi oluşturulduktan sonra bekleyen talepler Alacaklı tarafından değiştirilemez.Alacaklı, bir Öİ talebini Borçlu’ya gönderdikten sonra ödeme yapılmamış ise iptalini talep edebilir. İptal talebi, Alacaklı ÖHS tarafından Borçlu’nun bilgilendirilmesi için Borçlu ÖHS’ye Ödeme İste Sistemi kullanılarak iletilir.

-	Yalnızca **ödemesi gerçekleşmemiş** Öİ iptal edilebilir. Öİ’ye yanıt verilmiş olup olmaması iptale engel değildir.
-	Sonra Öde senaryolarında, **TEÖZ’e kadar** ödemesi gerçekleşmemiş Öİ için iptal talebi gönderilebilir. 
-	Hemen Öde senaryolarında, **SGZ’ye kadar** ödemesi gerçekleşmemiş Öİ için iptal talebi gönderilebilir. 
-	Alacaklı ÖHS, iptal talebini Borçlu ÖHS’ye iletmeden önce ilişkili Öİ’nin durumunu kontrol etmelidir. Örneğin, Öİ’nin daha önce reddedilmediğini, SGZ’nin geçmediğini vb. 
-	Katılımcılar gerekli durumlarda teknik hata ya da dolandırıcılık şüphesi gibi nedenlerle Öİ iptal talebi gönderebilir. 
-	Alacaklı ÖHS, iptal talebini başarıyla ilettiği Öİ talebine karşılık oluşturulmuş bir ödeme işlemi varsa bu ödemeyi reddeder.
-	Borçlu ÖHS, gelen iptal talebine ilişkin Borçlu’yu bilgilendirmelidir.

## 7.6. Ödeme İste Sistem Olay Dinleme

POST /sistem-olay-dinleme

ÖHS'lerin sistem olaylarını dinleme amacıyla açması gereken endpoint bilgisidir.

OHS API içerisinde yapılan değişikliklerde, BKM tarafından ÖHS'lere olay bildirimleri yapılır.

Olaylar yanıt nesnesi içerisinde 1 adet kayıt yer alacaktır.

Başarılı POST isteği sonucu HTTP 202 Accepted kodu ile dönülmelidir.

ÖHS'den başarılı yanıt alınamadığı durumda, 5 dakika aralıklarla 3 kez deneme yapılacaktır. Hata alınmaya devam edilmesi durumunda başka bir aksiyon alınmayacaktır.


**Tablo 10: Olay Nesnesi**

|Alan Adı |Json Alan Adı |Format: Veri Modeli İsmi |Açıklama|İstek |
| --- | --- | --- | --- | --- |
| Olay Numarası | olayNo | AN1..64 | Z | Olaya ait atanmış tekil kimlik numarası
| Olay Zamanı | olayZamani | ISODateTime | Z | Olayın oluşma zamanı |
| Olay Tipi | olayTipi	 | AN1..36	 | Z | TR.OIS.DataCode.OlayTip sıralı veri tiplerinden birini alır. |
| Kaynak Tipi | kaynakTipi | AN1..36	 | Z | TR.OIS.DataCode.KaynakTip sıralı veri tiplerinden birini alır. |
| Kaynak Numarası | kaynakNo | AN1..128	 | Z | Güncellenen kaynağa ait OHS sistemindeki tekil tanımlayıcı.|