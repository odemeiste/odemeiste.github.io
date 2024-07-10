# 6. Ödeme İste Kullanım Modelleri ve Fonksiyonlar
## 6.1 Ödeme İste Kullanım Modelleri

Katılımcıların, aşağıdaki modellerden dilediklerini Alacaklı’ya sunması mümkünken, Borçlu için tüm modelleri desteklemesi zorunludur.
-	Şimdi Kabul: (SGZ-ÖİOZ) = 180 saniye
-   Sonra Kabul: (SGZ-ÖİOZ) > 180 saniye
-	Hemen Öde: TEÖZ boş olarak iletildiğinde = Alacaklı Öİ‘yi oluşturduğu andan itibaren ödeme yapılmasını talep etmektedir. (Öİ’ye olumlu yanıt verildiği anda ödeme işlemi başlatılır.)
-	Sonra Öde: TEÖZ ≥ SGZ (Alacaklı, Öİ mesajının içerisine ödeme ile ilgili zaman bilgisi eklemiştir.) 
-	TEÖZ, SGZ alanı ile birlikte yorumlandığında;<br>
        <br>Şimdi Kabul/Hemen Öde, 
        <br>Şimdi Kabul/Sonra Öde,
        <br>Sonra Kabul/Sonra Öde,
        <br>Sonra Kabul/Hemen Öde 

şeklinde modeller kullanılabilir.

## 6.1.1 Sonra Kabul - Hemen Öde

Bu modelde, SGZ ile ÖİOZ arasındaki fark 180 saniyeden daha uzun bir süre olacak şekilde tanımlanarak “Sonra Kabul” işlemi olarak değerlendirilir. Ayrıca Alacaklı, Öİ’yi gönderdiği andan itibaren ödeme yapılmasını talep ettiği için Öİ’nin kabul edilmesi durumunda, kabul anında ödemenin başlatılmasını beklemektedir. TEÖZ boş olduğu bu işlem “Hemen Öde” olarak değerlendirilmelidir. 

Söz konusu senaryonun hesaplar arası (P2P) ödemelerde kullanılabileceği değerlendirilmektedir.

FAST ödemesi teknik bir sebeple gerçekleşmediği durumda Öİ işlemleri için ikinci defa FAST ödemesi gönderilmeyecektir.Tek bir Öİ talebi için en fazla 1 adet FAST işlemi gönderilebilir.

**Şekil 6: Sonra Kabul-Hemen Öde**

<img src="./images/img/SonraKabulHemenOde.png" width="80%" >

## 6.1.2 Sonra Kabul - Sonra Öde

Bu modelde, SGZ ile ÖİOZ arasındaki fark 180 saniyeden daha uzun bir süre olacak şekilde tanımlanarak “Sonra Kabul” işlemi olarak değerlendirilir.  Sonra Kabul – Hemen Öde modelinden farklı olarak bu modelde TEÖZ alanının Öİ mesajının içerisinde yer almasıdır. TEÖZ ≥ SGZ olarak iletildiğinde “Sonra Öde” olarak değerlendirilir.
Sonra Kabul-Sonra Öde modeliyle birlikte ödeme iste sistemine yeni fonksiyonlar eklenmiştir. 6.2 Ödeme İste Fonksiyonlar başlığı altında detaylara yer verilmektedir.

<img src="./images/img/SonraOdeSonraKabulErkenOdemeE.png" width="80%" >

Görselde anlatılan senaryoda, Alacaklı 01/09 10:00:00 zamanında gönderdiği Öİ talebine Borçlu’nun en geç 15 gün içerisinde yanıt vermesi beklemektedir. Alacaklı tarafından TEÖZ 20/09 23:59:59, ErkenTarihOdeme=”E” olarak belirlendiği için ödeme işlemi Borçlu’nun olumlu yanıt (kabul) anından itibaren TEÖZ (20/09)’e kadar borçlu tarafından seçilen bir tarihte yapılabilir. Söz konusu senaryonun genellikle kurumsal hesaplar arası (B2B) garantili ödemelerde kullanılabileceği değerlendirilmektedir.

**Şekil 7: Sonra Kabul-Sonra Öde**


<img src="./images/img/SonraOdeSonraKabulErkenOdemeH.png" width="80%" >

Görselde anlatılan senaryoda, Alacaklı 01/09 10:00:00 zamanında gönderdiği Öİ talebine Borçlu’nun en geç 15 gün içerisinde yanıt vermesini beklemektedir. Alacaklı tarafından TEÖZ 20/09 23:59:59, ErkenTarihOdeme=”H” olarak belirlendiği için ödeme işlemi ancak TEÖZ (20/09) gününde yapılabilir. Söz konusu senaryonun çoğunlukla kurumsal hesaplar arası (B2B) garantili ödemelerde kullanılabileceği değerlendirilmektedir.

**Şekil 8: Sonra Kabul-Sonra Öde**

## 6.2 Fonksiyonlar

-	Kısmi Ödeme
-	Erken Ödeme
-	Ödeme Erteleme

## 6.2.1 Kısmi Ödeme

Kısmi Ödeme, bir borcun tamamını değil, belirli bir miktarının ödenmesidir.

Kısmi ödeme yapıldığında işlem sona erer. Kalan tutar alacaklı ile borçlu müşteri sorumluluğundadır. Alacaklı ÖHK tarafından istenirse yeniden Öİ talebi yapılabilir. 

Borçlu ÖHS kısmi ödeme fonksiyonunu desteklemek zorundadır. Alacaklı ÖHS için isteğe bağlıdır.

Alacaklı ÖHS tarafından kısmi ödeme parametresi "E" olarak iletildiğinde borçlu ÖHS tarafından tutar alanı güncellenebilir olmalıdır. Kısmi ödeme parametresi "H" olarak iletildiğinde Öİ talebi içerisinde yer alan tutarın tamamı ödenmelidir.

Tüm modellerde kullanılabilir. Kullanım detayları OdemeIsteTalebi ve Odeme Iste İstek Nesnesi içerisinde belirtilmektedir.

## 6.2.2 Erken Ödeme

Erken ödeme, bir borcun belirlenen tarihten önce ödenmesidir. Sonra Kabul/Sonra Öde ve Şimdi Kabul/Sonra Öde modellerinde kullanılabilir.

Borçlu ÖHS erken ödeme fonksiyonunu desteklemek zorundadır. Alacaklı ÖHS için isteğe bağlıdır.

Alacaklı ÖHS tarafından erken ödeme parametresi "E" olarak iletildiğinde borçlu müşterinin ekranlarından TEÖZ'e kadar bir tarih seçtirilmesine izin verilmelidir. Seçilen tarih beklenenOdemeTarihi olacaktır. Borçlu müşteri SGZ tarihine kadar Öİ talebini yanıtlamalı ve borçlu müşteri tarafından kabul edilen Öİ talebi beklenen ödeme tarihinde gerçekleştirilmelidir. Beklenen ödeme tarihinin TEÖZ ile aynı tarih olması durumunda; ödeme TEÖZ'den önce gerçekleştirilmelidir.  

Alacaklı ÖHS tarafından erken ödeme parametresi "H" olarak iletildiğinde Öİ talebi TEÖZ'de gerçekleştirilmelidir.

- Beklenen Ödeme Tarihi: 20.07.2024 ve TEÖZ: 20.07.2024 23:59 seçildiği durumda Öİ talebi 20.07.2024 00:00:00+03:00 ile 20.07.2024 23:59:59+03:00 arasında gerçekleştirilmelidir.
- Beklenen Ödeme Tarihi: 20.07.2024 ve TEÖZ: 20.07.2024 17:30 seçildiği durumda Öİ talebi 20.07.2024 00:00:00+03:00 ile 20.07.2024 17:30:59+03:00 arasında gerçekleştirilmelidir.
- Beklenen Ödeme Tarihi: 20.07.2024 ve TEÖZ: 30.07.2024 23:59 seçildiği durumda Öİ talebi 20.07.2024 00:00:00+03:00 ile 20.07.2024 23:59:59+03:00 arasında gerçekleştirilmelidir.


## 6.2.3 Ödeme Erteleme

Ödeme Erteleme, bir borcun belirlenen tarihten sonra ödenmesidir. Sonra Kabul/Sonra Öde ve Şimdi Kabul/Sonra Öde modellerinde kullanılabilir.

Borçlu ÖHS ödeme erteleme fonksiyonunu desteklemek zorundadır. Alacaklı ÖHS için isteğe bağlıdır.

Alacaklı ÖHS tarafından ödeme erteleme parametresi "E" olarak iletildiğinde vadeTarihi ve vadeTutarı alanları da iletilir. Borçlu müşterinin ekranlarından vade tarihi ve vade tutarı seçimi yapılarak Öİ talebi onaylayabilir. Öİ talebi SGZ tarihine kadar yanıtlanmalıdır. 

Ödeme Erteleme "E" olarak gönderildiğinde sadece vade tarihi ve vade tutarı seçilerek yapılmak zorunda değildir. Borçlu müşteri Öİ talebini TEÖZ tarihini seçerek ya da erken ödeme "E" ise TEÖZ'den önce tarih seçimi yaparal da Öİ talebini onaylayabilir.

Alacaklı ÖHS tarafından Öİ talebi vade tarihi, TEÖZ’den maksimum 3 ay sonrasına kadar ertelenmesine izin verilmelidir.

Ödeme erteleme ile kısmi ödeme birlikte kullanılabilir. Ancak borçlu müşteri vade tarih ve vade tutar seçimi yaparak Öİ talebini kabul ettiğinde kısmi ödeme yapılmasına izin verilmemelidir. 