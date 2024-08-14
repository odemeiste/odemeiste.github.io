# 6. Ödeme İste Kullanım Modelleri ve Fonksiyonlar
## 6.1 Ödeme İste Kullanım Modelleri

İşyeri isteği modeli kullanarak Öİ Kurumsal API üzerinden ödeme iste talebi başlatabilir. Kullanacağı modele göre API'de gönderilmesi gereken alanlara dikkat edilmelidir.

-   Şimdi Kabul: (SGZ-ÖİOZ) = 180 saniye
-   Sonra Kabul: (SGZ-ÖİOZ) > 180 saniye
-   Hemen Öde: TEÖZ boş olarak iletildiğinde = Alacaklı Öİ'yi oluşturduğu andan itibaren ödeme yapılmasını talep etmektedir. (ödeme iste talebine olumlu yanıt verildiği anda ödeme işlemi başlatılır.)
-	Sonra Öde: TEÖZ ≥ SGZ (Alacaklı, ödeme iste mesajının içerisine ödeme ile ilgili zaman bilgisi eklemiştir.) 
-	TEÖZ, SGZ alanı ile birlikte yorumlandığında;<br>
        <br>Şimdi Kabul/Hemen Öde, 
        <br>Şimdi Kabul/Sonra Öde,
        <br>Sonra Kabul/Sonra Öde,
        <br>Sonra Kabul/Hemen Öde 

şeklinde modeller kullanılabilir.

## 6.1.1 Sonra Kabul - Hemen Öde

Bu modelde, SGZ ile ÖİOZ arasındaki fark 180 saniyeden daha uzun bir süre olacak şekilde tanımlanarak “Sonra Kabul” işlemi olarak değerlendirilir. Ayrıca Alacaklı, ödeme iste talebini gönderdiği andan itibaren ödeme yapılmasını talep ettiği için ödeme iste talebinin kabul edilmesi durumunda, kabul anında ödemenin başlatılmasını beklemektedir. TEÖZ boş olduğu bu işlem “Hemen Öde” olarak değerlendirilmelidir. 

Söz konusu senaryonun hesaplar arası (P2P) ödemelerde kullanılabileceği değerlendirilmektedir.

## 6.1.2 Sonra Kabul - Sonra Öde

Bu modelde, SGZ ile ÖİOZ arasındaki fark 180 saniyeden daha uzun bir süre olacak şekilde tanımlanarak “Sonra Kabul” işlemi olarak değerlendirilir. Sonra Kabul – Hemen Öde modelinden farklı olarak bu modelde TEÖZ alanının Öİ mesajının içerisinde yer almasıdır. TEÖZ ≥ SGZ olarak iletildiğinde “Sonra Öde” olarak değerlendirilir.


## 6.1.3 Şimdi Kabul - Hemen Öde

Bu modelde, SGZ ile ÖİOZ arasındaki fark 180 saniye olacak şekilde tanımlanarak “Şimdi Kabul” işlemi olarak değerlendirilir. Alacaklı, Borçlu’nun en geç 180 saniye içerisinde ödeme iste talebine yanıt vermesini beklemektedir. Alacaklı, ödeme iste talebini gönderdiği andan itibaren ödeme yapılmasını talep ettiği için ödeme iste talebinin kabul edilmesi durumunda, kabul anında (anlık) ödemenin başlatılmasını beklemektedir. 

SGZ ile ÖİOZ arasındaki zaman 180 saniye ve TEÖZ boş olarak iletildiğinde işlem “Şimdi Kabul - Hemen Öde” olarak değerlendirilmelidir. 

Söz konusu senaryonun işyeri ödemelerinde kullanılabileceği değerlendirilmektedir.

## 6.2 Fonksiyonlar

Fonksiyonlar API deseninde zorunlu olarak gönderilmelidir. Kullanılması istenmeyen fonksiyon için varsayılan değer E ya da H olarak gönderilebilir. Örneğin; işyeri tarafından kısmi ödeme yapılması istenmiyor ise müşteriye sunulmadan API'de varsayılan H değeri olarak gönderilmelidir.

-	Kısmi Ödeme
-	Erken Ödeme
-	Ödeme Erteleme

## 6.2.1 Kısmi Ödeme

Kısmi Ödeme, bir borcun tamamını değil, belirli bir miktarının ödenmesidir.

Kısmi ödeme yapıldığında işlem sona erer. Kalan tutar işyeri sorumluluğundadır. İşyeri tarafından istenirse yeniden ödeme iste talebi yapılabilir. 

İşyeri tarafından kısmi ödeme fonksiyonu müşteri ekranlarında müşteriye seçim olarak sunulabilir ya da müşteriye seçim yaptırılmadan ödeme iste talebinde varsayılan E/H olarak gönderilebilir.

Tüm modellerde kullanılabilir. Kullanım detayları OdemeIsteTalebi ve Odeme Iste İstek Nesnesi içerisinde belirtilmektedir.

## 6.2.2 Erken Ödeme

Erken ödeme, bir borcun talep edilen ödeme zamanından (TEÖZ) önce ödenebilmesine imkan tanır. 

Sonra Öde modellerinde kullanılabilir. Hemen Öde modellerinde varsayılan 'E' olarak gönderilmelidir.

İşyeri tarafından erken ödeme parametresi "E" olarak iletildiğinde ödeme iste talebi ÖİOZ ile TEÖZ arasında seçilen bir tarihte gerçekleştirilebilir.


## 6.2.3 Ödeme Erteleme

Ödeme Erteleme, bir borcun talep edilen ödeme zamanından (TEÖZ) sonra ödenebilmesine imkan tanır.

Sonra Öde modellerinde kullanılabilir. Hemen Öde modellerinde varsayılan 'H' olarak gönderilmelidir.

İşyeri tarafından ödeme erteleme parametresi "E" olarak iletildiğinde vadeTarihi ve vadeTutarı alanları da iletileceğinden bu değerler işyeri tarafından gönderilir.

İşyeri tarafından ödeme iste talebi vade tarihi, TEÖZ’den maksimum 3 ay sonrasına kadar ertelenebilir olmalıdır.

Kısmi ödeme ve ödeme erteleme birlikte kullanılarak ödeme iste talebi başlatılabilir. Ancak borçlu müşteri vade tarihi ve vade tutarı seçimi yaparak ödeme iste talebini kabul ettiğinde kısmi ödeme yapılmasına izin verilmemelidir. 