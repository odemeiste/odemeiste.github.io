# 4. Ödeme İste Durumları

Ödeme iste talebinin alabileceği durum kodları şu şekilde belirlenmiştir.

**A: Alacaklı ÖHS'de talep oluşturuldu** – İşyeri tarafından Öİ Kurumsal API çağırılarak Öİ talebi oluşturulduğunda <br>
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


