# 4. Ödeme İste Durumları

Müşteri, Borçlu ÖHS uygulaması üzerinden başlattığı ödeme iste işlemleri neticesinde ödemeye ait durumlar değişebilir. Ödeme durumunun alabileceği durum kodları şu şekilde belirlenmiştir.

**B: Yanıt Bekleniyor** – İlk Ödeme İste talebinde  
**K: Kabul Edildi** – Ödeme İste talebi müşteri tarafından kabul edildiğinde    
**O: Ödeme Gerçekleşti** – Ödeme iste talebi müşteri kabulü sonrası FAST,Havale sistemlerine aktarıldığında     
**I: İptal Edildi** 

Ödeme İste iptal durumu ise gerek raporlama gerekse müşteri deneyimi perspektifinden doğru bilgilendirmeler yapılabilmesi açısından aşağıdaki gibi detay kodları ile zenginleştirilmiştir:

Ödeme İste İptal Detay Kodu:

>>**&#8680;'01' :Borçlu Müşteri Ödeme İsteğini Reddetti** <br>
>>**&#8680;'02' :Borçlu Müşteri Beklenen Sürede Ödeme İsteğine Yanıt Vermedi**<br>
>>**&#8680;'03' :Borçlu ÖHS Fraud Nedeniyle İptal Etti**<br>
>>**&#8680;'04' :Borçlu ÖHS Ödeme Sistemine İletemedi**<br>
>>**&#8680;'11' : Alacaklı Müşteri Ödeme İste Talebinden B Statütüsünde Vazgeçti**<br> 
>>**&#8680;'12' : Alacaklı ÖHS Fraud Nedeniyle İptal Etti**<br> 
>>**&#8680;'13' : Borçlu ÖHS Ödeme İste Talebine Yanıt Vermedi**<br>
>>**&#8680;'21' : FAST Mesajı Doğrulanamadı ya da FAST Sistem Hatası**<br>

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

- Alacaklı ÖHS tarafında B statüsünde olan bir ödeme iste talebi alacaklı müşteri tarafından iptal edilebilir. İptal edilmesi durumunda Ödeme İste Durumunu B statüsünden I durumuna günceller. <br>Yanıt Bekleniyor ⇨ İptal Edildi B ⇨ I / 11

- Alacaklı ÖHS ödeme iste talebinin B statüsünde iken Fraud şüphesiyle ödeme iste talebini iptal edebilir. Ödeme iste durumunu B statüsünden I durumuna günceller. Yanıt Bekleniyor ⇨ İptal Edildi B ⇨ I / 12
	
- Alacaklı ÖHS tarafından Borçlu ÖHS’ye POST/odeme-iste sonucunda 504 hata alması ve yapılan sorgulamalar sonucunda başarısız yanıt almasıyla Alacaklı tarafta ilgili ödeme iste talebi iptal edilir. Kendi tarafında oluşturduğu ödeme iste durumunu B statüsünden I durumuna günceller. Yanıt Bekleniyor ⇨ İptal Edildi B ⇨ I / 13

- Borçlu ÖHS tarafından FAST sistemine gönderilen işlemlerde Alacaklı FAST sisteminin çalışmaması ya da FAST mesajının doğrulanamadığı durumlarda FAST işlemi gerçekleşmeyecektir. Alacaklı tarafta ve borçlu tarafta ilgili ödeme iste durumu I statüsüne çekilecektir. Kabul Edildi ⇨ İptal Edildi K ⇨ I / 21

|Ödeme İste Durumu |Güncellenebilir Ödeme İste Durumu |Borçlu ÖHS |Alacaklı ÖHS |
| --- | --- | --- | --- |
| B | K | Müşterinin kabul ettiği durumlarda güncellenmelidir. K durumu Alacaklı ÖHS'ye iletilmelidir. |B statüsünde olan bir ödeme iste talebi için Borçlu ÖHS tarafından K durumunun OdemeIsteYanit nesnesi ile iletilmesi durumunda güncellenmelidir.|
| B | O | -| Borçlu Müşteri Kabul Ettikten sonra OdemeIsteYanıt nesnesi ile K durumunu iletmesi halinde hata alabilir. Hata alsa dahi Borçlu ÖHS tarafından ödeme iste talebi FAST ya da Havale sistemine gönderilir. İşlemin başarılı gerçekleşmesi durumunda Alacaklı ÖHS tarafında ödeme iste durumunu  O olarak güncellemelidir.|
| B | I | Ödeme iste talebi Borçlu müşteri tarafından reddedildiği durumlarda güncellenmelidir.I durumu Alacaklı ÖHS'ye iletilmelidir. | Ödeme iste talebi Alacaklı Müşteri tarafından iptal edildiği durumlarda güncellenmelidir. |
| K | O | Borçlu müşteri kabul ettikten sonra ödeme sistemine iletilmesi ve ödemenin gerçekleşmesi durumlarında güncellenmelidir. | Borçlu müşteri kabul ettikten sonra ödeme sistemine iletilmesi ve ödemenin gerçekleşmesi durumlarında güncellenebilecek durumdur. |
| K | I |Borçlu müşteri kabul ettikten sonra ödeme sisteminde olumsuz olması ve işlem gerçekleşmemesi durumlarında güncellenebilecek durumdur.O durumu Alacaklı ÖHS'ye iletilmelidir. | Borçlu müşteri kabul ettikten sonra ödeme sisteminde olumsuz olması ve işlem gerçekleşmemesi durumlarında FAST'tan ya da Alacaklı ÖHS'den OdemeIsteYanit Nesnesi ile I durumuyla güncellenmelidir. |
| O | - | O statüsünden farklı bir statüye güncelleme yapılamamaktadır. | O statüsünden farklı bir statüye güncelleme yapılamamaktadır.| 
| I | - | I statüsünden farklı bir statüye güncelleme yapılamamaktadır. | I statüsünden farklı bir statüye güncelleme yapılamamaktadır.|

