# 4. Ödeme İste Durumları

Müşteri, Borçlu ÖHS uygulaması üzerinden başlattığı ödeme iste işlemleri neticesinde ödemeye ait durumlar değişebilir. Ödeme durumunun alabileceği durum kodları şu şekilde belirlenmiştir.

**B: Yanıt Bekleniyor** – İlk Ödeme İste talebinde  
**K: Kabul Edildi** – Ödeme İste talebi müşteri tarafından kabul edildiğinde    
**G: Ödeme Sistemine İletildi** – Ödeme iste talebi müşteri kabulü sonrası FAST,Havale sistemlerine aktarıldığında     
**O: Ödeme Gerçekleşti** – Ödeme iste talebi FAST,Havale sistemlerine aktarıldıktan sonra ödemenin başarılı gerçekleşmesi durumunda     
**I: İptal Edildi** 

Ödeme İste iptal durumu ise gerek raporlama gerekse müşteri deneyimi perspektifinden doğru bilgilendirmeler yapılabilmesi açısından aşağıdaki gibi detay kodları ile zenginleştirilmiştir:

Ödeme İste İptal Detay Kodu:

>>**&#8680;'01' : Borçlu Müşteri Ödeme İsteğini Reddetti** <br>
>>**&#8680;'02' : Borçlu Müşteri Beklenen Sürede Ödeme İsteğine Yanıt Vermedi**<br>
>>**&#8680;'03' : Borçlu ÖHS Fraud Nedeniyle İptal Etti**<br>
>>**&#8680;'04' : Borçlu ÖHS Ödeme Sistemine İletemedi**<br>
>>**&#8680;'05' : Borçlu ÖHS Ödeme İste Yanıt’ını Alacaklı ÖHS’ye İletemedi**<br>
>>**&#8680;'11' : Alacaklı Müşteri Ödeme İste Talebinden Vazgeçti**<br> 
>>**&#8680;'12' : Alacaklı ÖHS Fraud Nedeniyle İptal Etti**<br> 
>>**&#8680;'13' : Alacaklı ÖHS Ödeme İste Değerleri Uyuşmaması Nedeniyle İptal Etti**<br>
>>**&#8680;'21' : FAST Sistem Hatası**<br>
>>**&#8680;'22' : FAST Ödeme İste Bilgileri Doğrulanamadı**<br>
>>**&#8680;'23' : FAST Ödeme İste Zaman Kontrolleri Doğrulanamadı**<br>

ÖHS'ler sunmuş oldukları Ödeme İste Talebi İptal ekranını hangi kanallardan ödeme iste talebi yapılmasına izin veriliyorsa (web/mobil) aynı ortamdan müşteriye sunmalıdır.

Örneğin; bir ÖHS bireysel müşterileri için web ve mobil, kurumsal müşteriler için mobil üzerinden ödeme iste imkanı sunuyor ise, minimumda bireysel müşteriler için web ve mobil ortamlarından, kurumsal müşteriler için mobil kanaldan Ödeme İste İptal ekranı aracılığı ile ödeme iste talebinin iptaline izin vermelidir. 
Bunun dışında çağrı merkezi ya da şube gibi ortamlardan sunacağı Ödeme İste İptal imkanı ÖHS inisiyatifindedir.


## 4.1. Ödeme İste Ödeme Durumu Değişiklikleri

Alacaklı ÖHS’lerin  her bir ödeme iste talebini eşşiz ödeme iste referans numaraları ile oluşturması gerekmektedir. 
Ödeme İste Talebi Alacaklı ÖHS tarafından Borçlu ÖHS’ye iletilir. Borçlu ÖHS; kendisine gelen ödeme iste talebini, ödeme iste durumu Yanıt Bekleniyor - B  olacak şekilde yanıtlar. Aşağıdaki maddeler özelinde ödeme iste durumu Borçlu ÖHS tarafından B statüsünden I statüsüne güncellendiğinde OdemeIsteYanit nesnesi ile Alacaklı ÖHS’ye bildirilir.

- Borçlu ÖHS ilgili ödeme iste talebini müşterisine gösterdikten sonra red yanıtının alınması durumunda ödeme iste durumunu B statüsünden I durumuna günceller. Yanıt Bekleniyor ⇨ İptal Edildi B ⇨ I / 01

- Borçlu ÖHS ilgili ödeme iste talebini müşterisine gösterdikten sonra ödeme iste son geçerlilik zamanına kadar müşteri tarafından yanıt verilmemesi durumunda ödeme iste durumunu B statüsünden I durumuna günceller.<br> Yanıt Bekleniyor ⇨ İptal Edildi B ⇨ I / 02

- Borçlu ÖHS ilgili ödeme iste talebi için herhangi bir onay ya da iptal verilmediği ve son geçerlilik zamanına kadar beklenen sürede Fraud şüphesiyle ödeme iste talebini iptal edebilir. Ödeme iste durumunu B statüsünden I durumuna günceller. Yanıt Bekleniyor ⇨ İptal Edildi B ⇨ I / 03

- Borçlu ÖHS ilgili ödeme iste talebi için borçlu müşteri kabul yanıtı verdikten sonra yaptığı işlem limiti,hesap yetki gibi kontroller sonucunda ödeme sistemlerine ilgili taelbi gönderemediği için ödeme iste talebini iptal edebilir. Ödeme iste durumunu B statüsünden I durumuna günceller. Yanıt Bekleniyor ⇨ İptal Edildi B ⇨ I / 04

- Borçlu ÖHS ilgili ödeme iste talebi için borçlu müşteri kabul yanıtı verdikten sonra Alacaklı ÖHS'ye K durumunu OdemeIsteYanit nesnesi ile bildirmek istediğinde 200 yanıtı dışında hatalı bir yanıt alması halinde ödeme iste talebini iptal eder. Ödeme iste durumunu Borçlu ÖHS olarak K durumundan I durumuna günceller. Kabul Edildi ⇨ İptal Edildi K ⇨ I / 05 . <br> Alacaklı ÖHS ise ödeme iste sorgulaması ile kendi tarafında ödeme iste durumunu B durumundan I durumuna günceller. Yanıt Bekleniyor ⇨ İptal Edildi B ⇨ I / 05

- Alacaklı ÖHS tarafında B statüsünde olan bir ödeme iste talebi alacaklı müşteri tarafından iptal edilebilir. İptal edilmesi durumunda Ödeme İste Durumunu B statüsünden I durumuna günceller. Yanıt Bekleniyor ⇨ İptal Edildi B ⇨ I / 11

- Alacaklı ÖHS ödeme iste talebinin B statüsünde iken Fraud şüphesiyle ödeme iste talebini iptal edebilir. Ödeme iste durumunu B statüsünden I durumuna günceller. Yanıt Bekleniyor ⇨ İptal Edildi B ⇨ I / 12

- Alacaklı ÖHS ÖdemeIsteTalebi için istek gövdesinde gönderdiği değerlerin , Borçlu ÖHS tarafından verilen yanıt gövdesindeki  gövdesindeki değerlerle birebir kontrolünü sağlar. İstekte iletilen değerlerin yanıtta dönülen değerlerle uyuşmaması durumunda ilgili ödeme iste talebini iptal eder. Ödeme iste durumunu B statüsünden I durumuna günceller. Yanıt Bekleniyor ⇨ İptal Edildi B ⇨ I / 13

- Borçlu tarafından kabul edilen ödemesi henüz gerçekleşmemiş Öİ talebi red edilebilir. Kabul Edildi ⇨ İptal Edildi K ⇨ I / 01
    - Kabul Edildi ⇨ Kabul Edildi K ⇨ K durum güncellemesi yapılamayacaktır. 

- Alacaklı ÖHS müşteri tarafından kabul edilen ödemesi henüz gerçekleşmemiş Öİ talebi iptal servisini çağırarak  talebini iptal edebilir. Kabul Edildi ⇨ İptal Edildi K ⇨ I / 11
	
- Borçlu ÖHS tarafından FAST sistemine gönderilen işlemlerde örneğin; Alacaklı FAST sisteminin çalışmaması durumlarında FAST işlemi gerçekleşmeyecektir. FAST sisteminden 28 ve 29 teyit kodu dışında iletilen/gelen kodlar için ödeme iste iptal detay kodu olarak 21 kod değeri kullanılacaktır. Alacaklı tarafta ve borçlu tarafta ilgili ödeme iste durumu I statüsüne çekilecektir. Kabul Edildi ⇨ İptal Edildi K ⇨ I / 21

- Borçlu ÖHS tarafından FAST sistemine gönderilen işlemlerde örneğin; A01 mesajındaki tutar bilgisinin Öİ talebindeki kabul edilen tutardan farklı olduğu durumda işlem gerçekleşmeyecektir. Alacaklı ÖHS tarafından tutar değişikliği tespit edilip 28 teyit kodu ile FAST mesajında dönülecektir. 28 teyit kodu (Öİ bilgileri doğrulanamadı) ile FAST tarafında olumsuz olan işlemler için ödeme iste iptal detay kodu olarak 22 kod değeri kullanılacaktır. Alacaklı tarafta ve borçlu tarafta ilgili ödeme iste durumu I statüsüne çekilecektir. Kabul Edildi ⇨ İptal Edildi K ⇨ I / 22

- Borçlu ÖHS tarafından FAST sistemine gönderilen işlemlerde örneğin; SGZ süresi geçtikten sonra FAST'a gönderilen işlem gerçekleşmeyecektir. Alacaklı ÖHS tarafından SGZ süre aşımı tespit edilip 29 teyit kodu ile FAST mesajında dönülecektir. 29 teyit kodu (Öİ zaman kontrolleri doğrulanamadı) ile FAST tarafında olumsuz olan işlemler için ödeme iste iptal detay kodu olarak 23 kod değeri kullanılacaktır. Alacaklı tarafta ve borçlu tarafta ilgili ödeme iste durumu I statüsüne çekilecektir. Kabul Edildi ⇨ İptal Edildi K ⇨ I / 23


|Ödeme İste Durumu |Güncellenebilir Ödeme İste Durumu |Borçlu ÖHS |Alacaklı ÖHS |
| --- | --- | --- | --- |
| B | K | Müşterinin kabul ettiği durumlarda güncellenmelidir. K durumu Alacaklı ÖHS'ye iletilmelidir. |B statüsünde olan bir ödeme iste talebi için Borçlu ÖHS tarafından K durumunun OdemeIsteYanit nesnesi ile iletilmesi durumunda güncellenmelidir.|
| B | I | Ödeme iste talebi Borçlu müşteri tarafından reddedildiği durumlarda güncellenmelidir.I durumu Alacaklı ÖHS'ye iletilmelidir. | Ödeme iste talebi Alacaklı Müşteri tarafından iptal edildiği durumlarda güncellenmelidir. |
| K | G | Borçlu müşteri kabul ettikten sonra ödeme sistemine iletilmesi durumlarında güncellenmelidir. G durumu Alacaklı ÖHS'ye iletilmemelidir. Borçlu ÖHS tarafında ödeme sistemine iletilen bir ödeme iste talebinin durumunun iptal edilememesi bu durum kodu ile sağlanmalıdır. | - |
| G | O | Ödeme sistemine iletilen bir ödemenin gerçekleşmesi durumlarında güncellenmelidir. | - |
| K | O | FAST tarafından gelen olumlu mesaja istinaden güncelleme yapılacak durumdur. | FAST tarafından gelen olumlu mesaja istinaden güncelleme yapılacak durumdur. |
| K | I |**Şimdi Kabul/Hemen Öde ve Sonra Kabul/Hemen Öde** modellerinde; borçlu müşteri Öİ talebini kabul ettikten sonra ödeme sisteminde olumsuz olması ve işlem gerçekleşmemesi durumlarında güncellenebilecek durumdur. I durumu Alacaklı ÖHS'ye iletilmelidir. <br><br>**Şimdi Kabul/Sonra Öde ve Sonra Kabul/Sonra Öde** modellerinde; borçlu müşteri tarafından kabul edilen ödemesi henüz gerçekleşmemiş Öİ talebi iptal edilebilir. Borçlu ÖHS, I durumu Alacaklı ÖHS'ye iletilmelidir. | **Şimdi Kabul/Hemen Öde ve Sonra Kabul/Hemen Öde** modellerinde; borçlu müşteri kabul ettikten sonra ödeme sisteminde olumsuz olması ve işlem gerçekleşmemesi durumlarında FAST'tan ya da Borçlu ÖHS'den gönderilecek OdemeIsteYanit Nesnesi I durumuyla güncellenmelidir. <br><br>**Şimdi Kabul/Sonra Öde ve Sonra Kabul/Sonra Öde** modellerinde; alacaklı müşteri tarafından Öİ talebi ödemesi henüz gerçekleşmemiş iptal edilebilir. Alacaklı ÖHS, I durumu borçlu ÖHS'ye iletilmelidir. |
| O | - | O statüsünden farklı bir statüye güncelleme yapılamayacaktır. | O statüsünden farklı bir statüye güncelleme yapılamayacaktır.| 
| I | - | I statüsünden farklı bir statüye güncelleme yapılamayacaktır. | I statüsünden farklı bir statüye güncelleme yapılamayacaktır.|

