(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{441:function(e,i,a){"use strict";a.r(i);var l=a(62),t=Object(l.a)({},(function(){var e=this,i=e.$createElement,a=e._self._c||i;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"_4-odeme-iste-durumları"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-odeme-iste-durumları"}},[e._v("#")]),e._v(" 4. Ödeme İste Durumları")]),e._v(" "),a("p",[e._v("Müşteri, Borçlu ÖHS uygulaması üzerinden başlattığı ödeme iste işlemleri neticesinde ödemeye ait durumlar değişebilir. Ödeme durumunun alabileceği durum kodları şu şekilde belirlenmiştir.")]),e._v(" "),a("p",[a("strong",[e._v("B: Yanıt Bekleniyor")]),e._v(" – İlk Ödeme İste talebinde"),a("br"),e._v(" "),a("strong",[e._v("K: Kabul Edildi")]),e._v(" – Ödeme İste talebi müşteri tarafından kabul edildiğinde"),a("br"),e._v(" "),a("strong",[e._v("O: Ödeme Gerçekleşti")]),e._v(" – Ödeme iste talebi müşteri kabulü sonrası FAST,Havale sistemlerine aktarıldığında"),a("br"),e._v(" "),a("strong",[e._v("I: İptal Edildi")])]),e._v(" "),a("p",[e._v("Ödeme İste iptal durumu ise gerek raporlama gerekse müşteri deneyimi perspektifinden doğru bilgilendirmeler yapılabilmesi açısından aşağıdaki gibi detay kodları ile zenginleştirilmiştir:")]),e._v(" "),a("p",[e._v("Ödeme İste İptal Detay Kodu:")]),e._v(" "),a("blockquote",[a("blockquote",[a("p",[a("strong",[e._v("⇨'01' :Borçlu Müşteri Ödeme İsteğini Reddetti")]),e._v(" "),a("br"),e._v(" "),a("strong",[e._v("⇨'02' :Borçlu Müşteri Beklenen Sürede Ödeme İsteğine Yanıt Vermedi")]),a("br"),e._v(" "),a("strong",[e._v("⇨'03' :Borçlu ÖHS Fraud Nedeniyle İptal Etti")]),a("br"),e._v(" "),a("strong",[e._v("⇨'04' :Borçlu ÖHS Ödeme Sistemine İletemedi")]),a("br"),e._v(" "),a("strong",[e._v("⇨'11' : Alacaklı Müşteri Ödeme İste Talebinden B Statütüsünde Vazgeçti")]),a("br"),e._v(" "),a("strong",[e._v("⇨'12' : Alacaklı ÖHS Fraud Nedeniyle İptal Etti")]),a("br"),e._v(" "),a("strong",[e._v("⇨'13' : Borçlu ÖHS Ödeme İste Talebine Yanıt Vermedi")]),a("br"),e._v(" "),a("strong",[e._v("⇨'21' : FAST Mesajı Doğrulanamadı ya da FAST Sistem Hatası")]),a("br")])])]),e._v(" "),a("p",[e._v("ÖHS'ler sunmuş oldukları Ödeme İste Talebi İptal ekranını hangi kanallardan ödeme iste talebi yapılmasına izin veriliyorsa (web/mobil) aynı ortamdan müşteriye sunmalıdır.")]),e._v(" "),a("p",[e._v("Örneğin; bir ÖHS bireysel müşterileri için web ve mobil, kurumsal müşteriler için mobil üzerinden ödeme iste imkanı sunuyor ise, minimumda bireysel müşteriler için web ve mobil ortamlarından, kurumsal müşteriler için mobil kanaldan Ödeme İste İptal ekranı aracılığı ile ödeme iste talebinin iptaline izin vermelidir.\nBunun dışında çağrı merkezi ya da şube gibi ortamlardan sunacağı Ödeme İste İptal imkanı ÖHS inisiyatifindedir.")]),e._v(" "),a("h2",{attrs:{id:"_4-1-odeme-iste-odeme-durumu-degisiklikleri"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-1-odeme-iste-odeme-durumu-degisiklikleri"}},[e._v("#")]),e._v(" 4.1. Ödeme İste Ödeme Durumu Değişiklikleri")]),e._v(" "),a("p",[e._v("Alacaklı ÖHS’lerin  her bir ödeme iste talebini eşşiz ödeme iste referans numaraları ile oluşturması gerekmektedir.\nÖdeme İste Talebi Alacaklı ÖHS tarafından Borçlu ÖHS’ye iletilir. Borçlu ÖHS; kendisine gelen ödeme iste talebini, ödeme iste durumu Yanıt Bekleniyor - B  olacak şekilde yanıtlar. Aşağıdaki maddeler özelinde ödeme iste durumu Borçlu ÖHS tarafından B statüsünden I statüsüne güncellendiğinde OdemeIsteYanit nesnesi ile Alacaklı ÖHS’ye bildirilir.")]),e._v(" "),a("ul",[a("li",[a("p",[e._v("Borçlu ÖHS ilgili ödeme iste talebini müşterisine gösterdikten sonra red yanıtının alınması durumunda ödeme iste durumunu B statüsünden I durumuna günceller. Yanıt Bekleniyor ⇨ İptal Edildi B ⇨ I / 01")])]),e._v(" "),a("li",[a("p",[e._v("Borçlu ÖHS ilgili ödeme iste talebini müşterisine gösterdikten sonra ödeme iste son geçerlilik zamanına kadar müşteri tarafından yanıt verilmemesi durumunda ödeme iste durumunu B statüsünden I durumuna günceller."),a("br"),e._v(" Yanıt Bekleniyor ⇨ İptal Edildi B ⇨ I / 02")])]),e._v(" "),a("li",[a("p",[e._v("Borçlu ÖHS ilgili ödeme iste talebi için herhangi bir onay ya da iptal verilmediği ve son geçerlilik zamanına kadar beklenen sürede Fraud şüphesiyle ödeme iste talebini iptal edebilir. Ödeme iste durumunu B statüsünden I durumuna günceller. Yanıt Bekleniyor ⇨ İptal Edildi B ⇨ I / 03")])]),e._v(" "),a("li",[a("p",[e._v("Borçlu ÖHS ilgili ödeme iste talebi için borçlu müşteri kabul yanıtı verdikten sonra yaptığı işlem limiti,hesap yetki gibi kontroller sonucunda ödeme sistemlerine ilgili taelbi gönderemediği için ödeme iste talebini iptal edebilir. Ödeme iste durumunu B statüsünden I durumuna günceller. Yanıt Bekleniyor ⇨ İptal Edildi B ⇨ I / 04")])]),e._v(" "),a("li",[a("p",[e._v("Alacaklı ÖHS tarafında B statüsünde olan bir ödeme iste talebi alacaklı müşteri tarafından iptal edilebilir. İptal edilmesi durumunda Ödeme İste Durumunu B statüsünden I durumuna günceller. "),a("br"),e._v("Yanıt Bekleniyor ⇨ İptal Edildi B ⇨ I / 11")])]),e._v(" "),a("li",[a("p",[e._v("Alacaklı ÖHS ödeme iste talebinin B statüsünde iken Fraud şüphesiyle ödeme iste talebini iptal edebilir. Ödeme iste durumunu B statüsünden I durumuna günceller. Yanıt Bekleniyor ⇨ İptal Edildi B ⇨ I / 12")])]),e._v(" "),a("li",[a("p",[e._v("Alacaklı ÖHS tarafından Borçlu ÖHS’ye POST/odeme-iste sonucunda 504 hata alması ve yapılan sorgulamalar sonucunda başarısız yanıt almasıyla Alacaklı tarafta ilgili ödeme iste talebi iptal edilir. Kendi tarafında oluşturduğu ödeme iste durumunu B statüsünden I durumuna günceller. Yanıt Bekleniyor ⇨ İptal Edildi B ⇨ I / 13")])]),e._v(" "),a("li",[a("p",[e._v("Borçlu ÖHS tarafından FAST sistemine gönderilen işlemlerde Alacaklı FAST sisteminin çalışmaması ya da FAST mesajının doğrulanamadığı durumlarda FAST işlemi gerçekleşmeyecektir. Alacaklı tarafta ve borçlu tarafta ilgili ödeme iste durumu I statüsüne çekilecektir. Kabul Edildi ⇨ İptal Edildi K ⇨ I / 21")])])]),e._v(" "),a("table",[a("thead",[a("tr",[a("th",[e._v("Ödeme İste Durumu")]),e._v(" "),a("th",[e._v("Güncellenebilir Ödeme İste Durumu")]),e._v(" "),a("th",[e._v("Açıklama")])])]),e._v(" "),a("tbody",[a("tr",[a("td",[e._v("B")]),e._v(" "),a("td",[e._v("K")]),e._v(" "),a("td",[e._v("Müşterinin kabul ettiği durumlarda güncellenebilecek durumdur.")])]),e._v(" "),a("tr",[a("td",[e._v("B")]),e._v(" "),a("td",[e._v("O")]),e._v(" "),a("td",[e._v("Borçlu Müşteri Kabul Ettikten sonra OdemeIsteYanıt nesnesi ile K durumunu iletmesi halinde hata alabilir. Hata alsa dahi Borçlu ÖHS tarafından ödeme iste talebi FAST ya da Havale sistemine gönderilir. İşlemin başarılı gerçekleşmesi durumunda Alacaklı ÖHS tarafında ödeme iste durumu O olarak güncellenebilecek durumdur.")])]),e._v(" "),a("tr",[a("td",[e._v("B")]),e._v(" "),a("td",[e._v("I")]),e._v(" "),a("td",[e._v("Ödeme iste talebi Borçlu müşteri tarafından rededildiği veya Alacaklı Müşteri tarafından iptal edildiği durumlarda güncellenebilecek durumdur.")])]),e._v(" "),a("tr",[a("td",[e._v("K")]),e._v(" "),a("td",[e._v("O")]),e._v(" "),a("td",[e._v("Borçlu müşteri kabul ettikten sonra ödeme sistemine iletilmesi ve ödemenin gerçekleşmesi durumlarında güncellenebilecek durumdur.")])]),e._v(" "),a("tr",[a("td",[e._v("K")]),e._v(" "),a("td",[e._v("I")]),e._v(" "),a("td",[e._v("Borçlu müşteri kabul ettikten sonra  ödeme sisteminde olumsuz olması ve işlem gerçekleşmemesi durumlarında güncellenebilecek durumdur.")])]),e._v(" "),a("tr",[a("td",[e._v("O")]),e._v(" "),a("td",[e._v("O")]),e._v(" "),a("td",[e._v("O statüsünde bir güncelleme olabilecek durum bulunmamaktadır.")])]),e._v(" "),a("tr",[a("td",[e._v("I")]),e._v(" "),a("td",[e._v("I")]),e._v(" "),a("td",[e._v("I statüsünde bir güncelleme olabilecek durum bulunmamaktadır.")])])])])])}),[],!1,null,null,null);i.default=t.exports}}]);