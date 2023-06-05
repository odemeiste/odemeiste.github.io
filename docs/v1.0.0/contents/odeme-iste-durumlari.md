# 4. Ödeme İste Durumları

Müşteri, Borçlu ÖHS uygulaması üzerinden başlattığı ödeme iste işlemleri neticesinde ödemeye ait durumlar değişebilir. Ödeme durumunun alabileceği durum kodları şu şekilde belirlenmiştir.

B: Yanıt Bekleniyor – İlk Ödeme İste talebinde
K: Kabul Edildi – Ödeme İste talebi müşteri tarafından kabul edildiğinde
O: Ödeme Sistemine Emir İletildi – Ödeme iste talebi müşteri kabulü sonrası FAST,Havale sistemlerine aktarıldığında
I :İptal Edildi

Ödeme İste iptal durumu ise gerek raporlama gerekse müşteri deneyimi perspektifinden doğru bilgilendirmeler yapılabilmesi açısından aşağıdaki gibi detay kodları ile zenginleştirilmiştir:

Ödeme İste İptal Detay Kodu:

>>**&#8680;'01' :Borçlu Ödeme İsteğini Reddetti** <br>
>>**&#8680;'02' :Borçlu Beklenen Sürede Ödeme İsteğine Yanıt Vermedi**<br>
>>**&#8680;'03' :Borçlu İptal Etti**<br>
>>**&#8680;'04' :Borçlu Tarafından Beklenen Sürede Ödeme Sistemine Emir İletilmedi**<br>
>>**&#8680;'05' :Borçlu ÖHS Fraud Nedeniyle İptal Etti**<br>
>>**&#8680;'06' :Alacaklının Ödeme İste Yetkisinin Kapalı Olması**<br>
>>**&#8680;'07' :Alacaklı Ödeme İste Talebinden B Statüsünde Vazgeçti**<br>
>>**&#8680;'08' :Alacaklı Ödeme İste Talebinden K Statüsünde Vazgeçti**<br>
>>**&#8680;'09' :Alacaklı ÖHS Fraud Nedeniyle İptal Etti**<br>
>>**&#8680;'10' : Müşteri ÖHS kontrollerini Aşamadı**<br>
>>**&#8680;'99' : Diğer**

## 4.1. Ödeme İste Ödeme Durumu Değişiklikleri

"iptalDetay" : "01" borçlu ödeme isteğini red etti.B durumdayken B->I<br>
"iptalDetay" : "02" borçlu beklenen sürede ödeme isteğine yanıt vermedi. B durumdayken B->I<br>
"iptalDetay" : "03" borçlu iptal etti. K durumdayken K->I<br>
"iptalDetay" : "04" beklenen sürede ödeme sistemine emir iletilmedi. K -> I<br>
"iptalDetay" : "05" borçlu ÖHS fraud nedeniyle iptal etti. B,K -> I<br>
"iptalDetay" : "11" alacaklı ödeme iste talebinden vazgeçti. B,K -> I<br>
"iptalDetay" : "12" alacaklı ÖHS fraud nedeniyle iptal etti. B,K -> I<br>