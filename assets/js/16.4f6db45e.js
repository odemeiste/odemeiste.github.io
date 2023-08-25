(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{439:function(e,i,l){"use strict";l.r(i);var a=l(62),t=Object(a.a)({},(function(){var e=this,i=e.$createElement,l=e._self._c||i;return l("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[l("h1",{attrs:{id:"_4-odeme-iste-durumları"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#_4-odeme-iste-durumları"}},[e._v("#")]),e._v(" 4. Ödeme İste Durumları")]),e._v(" "),l("p",[e._v("Müşteri, Borçlu ÖHS uygulaması üzerinden başlattığı ödeme iste işlemleri neticesinde ödemeye ait durumlar değişebilir. Ödeme durumunun alabileceği durum kodları şu şekilde belirlenmiştir.")]),e._v(" "),l("p",[l("strong",[e._v("B: Yanıt Bekleniyor")]),e._v(" – İlk Ödeme İste talebinde"),l("br"),e._v(" "),l("strong",[e._v("K: Kabul Edildi")]),e._v(" – Ödeme İste talebi müşteri tarafından kabul edildiğinde"),l("br"),e._v(" "),l("strong",[e._v("G: Ödeme Sistemine İletildi")]),e._v(" – Ödeme iste talebi müşteri kabulü sonrası FAST,Havale sistemlerine aktarıldığında"),l("br"),e._v(" "),l("strong",[e._v("O: Ödeme Gerçekleşti")]),e._v(" – Ödeme iste talebi FAST,Havale sistemlerine aktarıldıktan sonra ödemenin başarılı gerçekleşmesi durumunda"),l("br"),e._v(" "),l("strong",[e._v("I: İptal Edildi")])]),e._v(" "),l("p",[e._v("Ödeme İste iptal durumu ise gerek raporlama gerekse müşteri deneyimi perspektifinden doğru bilgilendirmeler yapılabilmesi açısından aşağıdaki gibi detay kodları ile zenginleştirilmiştir:")]),e._v(" "),l("p",[e._v("Ödeme İste İptal Detay Kodu:")]),e._v(" "),l("blockquote",[l("blockquote",[l("p",[l("strong",[e._v("⇨'01' : Borçlu Müşteri Ödeme İsteğini Reddetti")]),e._v(" "),l("br"),e._v(" "),l("strong",[e._v("⇨'02' : Borçlu Müşteri Beklenen Sürede Ödeme İsteğine Yanıt Vermedi")]),l("br"),e._v(" "),l("strong",[e._v("⇨'03' : Borçlu ÖHS Fraud Nedeniyle İptal Etti")]),l("br"),e._v(" "),l("strong",[e._v("⇨'04' : Borçlu ÖHS Ödeme Sistemine İletemedi")]),l("br"),e._v(" "),l("strong",[e._v("⇨'05' : Borçlu ÖHS Ödeme İste Yanıt’ını Alacaklı ÖHS’ye İletemedi")]),l("br"),e._v(" "),l("strong",[e._v("⇨'11' : Alacaklı Müşteri Ödeme İste Talebinden Vazgeçti")]),l("br"),e._v(" "),l("strong",[e._v("⇨'12' : Alacaklı ÖHS Fraud Nedeniyle İptal Etti")]),l("br"),e._v(" "),l("strong",[e._v("⇨'13' : Alacaklı ÖHS Ödeme İste Değerleri Uyuşmaması Nedeniyle İptal Etti")]),l("br"),e._v(" "),l("strong",[e._v("⇨'21' : FAST Mesajı Doğrulanamadı ya da FAST Sistem Hatası")]),l("br")])])]),e._v(" "),l("p",[e._v("ÖHS'ler sunmuş oldukları Ödeme İste Talebi İptal ekranını hangi kanallardan ödeme iste talebi yapılmasına izin veriliyorsa (web/mobil) aynı ortamdan müşteriye sunmalıdır.")]),e._v(" "),l("p",[e._v("Örneğin; bir ÖHS bireysel müşterileri için web ve mobil, kurumsal müşteriler için mobil üzerinden ödeme iste imkanı sunuyor ise, minimumda bireysel müşteriler için web ve mobil ortamlarından, kurumsal müşteriler için mobil kanaldan Ödeme İste İptal ekranı aracılığı ile ödeme iste talebinin iptaline izin vermelidir.\nBunun dışında çağrı merkezi ya da şube gibi ortamlardan sunacağı Ödeme İste İptal imkanı ÖHS inisiyatifindedir.")]),e._v(" "),l("h2",{attrs:{id:"_4-1-odeme-iste-odeme-durumu-degisiklikleri"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#_4-1-odeme-iste-odeme-durumu-degisiklikleri"}},[e._v("#")]),e._v(" 4.1. Ödeme İste Ödeme Durumu Değişiklikleri")]),e._v(" "),l("p",[e._v("Alacaklı ÖHS’lerin  her bir ödeme iste talebini eşşiz ödeme iste referans numaraları ile oluşturması gerekmektedir.\nÖdeme İste Talebi Alacaklı ÖHS tarafından Borçlu ÖHS’ye iletilir. Borçlu ÖHS; kendisine gelen ödeme iste talebini, ödeme iste durumu Yanıt Bekleniyor - B  olacak şekilde yanıtlar. Aşağıdaki maddeler özelinde ödeme iste durumu Borçlu ÖHS tarafından B statüsünden I statüsüne güncellendiğinde OdemeIsteYanit nesnesi ile Alacaklı ÖHS’ye bildirilir.")]),e._v(" "),l("ul",[l("li",[l("p",[e._v("Borçlu ÖHS ilgili ödeme iste talebini müşterisine gösterdikten sonra red yanıtının alınması durumunda ödeme iste durumunu B statüsünden I durumuna günceller. Yanıt Bekleniyor ⇨ İptal Edildi B ⇨ I / 01")])]),e._v(" "),l("li",[l("p",[e._v("Borçlu ÖHS ilgili ödeme iste talebini müşterisine gösterdikten sonra ödeme iste son geçerlilik zamanına kadar müşteri tarafından yanıt verilmemesi durumunda ödeme iste durumunu B statüsünden I durumuna günceller."),l("br"),e._v(" Yanıt Bekleniyor ⇨ İptal Edildi B ⇨ I / 02")])]),e._v(" "),l("li",[l("p",[e._v("Borçlu ÖHS ilgili ödeme iste talebi için herhangi bir onay ya da iptal verilmediği ve son geçerlilik zamanına kadar beklenen sürede Fraud şüphesiyle ödeme iste talebini iptal edebilir. Ödeme iste durumunu B statüsünden I durumuna günceller. Yanıt Bekleniyor ⇨ İptal Edildi B ⇨ I / 03")])]),e._v(" "),l("li",[l("p",[e._v("Borçlu ÖHS ilgili ödeme iste talebi için borçlu müşteri kabul yanıtı verdikten sonra yaptığı işlem limiti,hesap yetki gibi kontroller sonucunda ödeme sistemlerine ilgili taelbi gönderemediği için ödeme iste talebini iptal edebilir. Ödeme iste durumunu B statüsünden I durumuna günceller. Yanıt Bekleniyor ⇨ İptal Edildi B ⇨ I / 04")])]),e._v(" "),l("li",[l("p",[e._v("Borçlu ÖHS ilgili ödeme iste talebi için borçlu müşteri kabul yanıtı verdikten sonra Alacaklı ÖHS'ye K durumunu OdemeIsteYanit nesnesi ile bildirmek istediğinde 200 yanıtı dışında hatalı bir yanıt alması halinde ödeme iste talebini iptal eder. Ödeme iste durumunu Borçlu ÖHS olarak K durumundan I durumuna günceller. Kabul Edildi ⇨ İptal Edildi K ⇨ I / 05 . "),l("br"),e._v(" Alacaklı ÖHS ise ödeme iste sorgulaması ile kendi tarafında ödeme iste durumunu B durumundan I durumuna günceller. Yanıt Bekleniyor ⇨ İptal Edildi B ⇨ I / 05")])]),e._v(" "),l("li",[l("p",[e._v("Alacaklı ÖHS tarafında B statüsünde olan bir ödeme iste talebi alacaklı müşteri tarafından iptal edilebilir. İptal edilmesi durumunda Ödeme İste Durumunu B statüsünden I durumuna günceller. "),l("br"),e._v("Yanıt Bekleniyor ⇨ İptal Edildi B ⇨ I / 11")])]),e._v(" "),l("li",[l("p",[e._v("Alacaklı ÖHS ödeme iste talebinin B statüsünde iken Fraud şüphesiyle ödeme iste talebini iptal edebilir. Ödeme iste durumunu B statüsünden I durumuna günceller. Yanıt Bekleniyor ⇨ İptal Edildi B ⇨ I / 12")])]),e._v(" "),l("li",[l("p",[e._v("Alacaklı ÖHS ÖdemeIsteTalebi için istekte gönderdiği değerlerin , Borçlu ÖHS tarafından verilen yanıt içerisindeki değerlerle birebir kontrolünü sağlar. İstekte iletilen değerlerin yanıtta dönülen değerlerle uyuşmaması durumunda ilgili ödeme iste talebini iptal eder. Ödeme iste durumunu B statüsünden I durumuna günceller. Yanıt Bekleniyor ⇨ İptal Edildi B ⇨ I / 13")])]),e._v(" "),l("li",[l("p",[e._v("Borçlu ÖHS tarafından FAST sistemine gönderilen işlemlerde Alacaklı FAST sisteminin çalışmaması ya da FAST mesajının doğrulanamadığı durumlarda FAST işlemi gerçekleşmeyecektir. Alacaklı tarafta ve borçlu tarafta ilgili ödeme iste durumu I statüsüne çekilecektir. Kabul Edildi ⇨ İptal Edildi K ⇨ I / 21")])])]),e._v(" "),l("table",[l("thead",[l("tr",[l("th",[e._v("Ödeme İste Durumu")]),e._v(" "),l("th",[e._v("Güncellenebilir Ödeme İste Durumu")]),e._v(" "),l("th",[e._v("Borçlu ÖHS")]),e._v(" "),l("th",[e._v("Alacaklı ÖHS")])])]),e._v(" "),l("tbody",[l("tr",[l("td",[e._v("B")]),e._v(" "),l("td",[e._v("K")]),e._v(" "),l("td",[e._v("Müşterinin kabul ettiği durumlarda güncellenmelidir. K durumu Alacaklı ÖHS'ye iletilmelidir.")]),e._v(" "),l("td",[e._v("B statüsünde olan bir ödeme iste talebi için Borçlu ÖHS tarafından K durumunun OdemeIsteYanit nesnesi ile iletilmesi durumunda güncellenmelidir.")])]),e._v(" "),l("tr",[l("td",[e._v("B")]),e._v(" "),l("td",[e._v("I")]),e._v(" "),l("td",[e._v("Ödeme iste talebi Borçlu müşteri tarafından reddedildiği durumlarda güncellenmelidir.I durumu Alacaklı ÖHS'ye iletilmelidir.")]),e._v(" "),l("td",[e._v("Ödeme iste talebi Alacaklı Müşteri tarafından iptal edildiği durumlarda güncellenmelidir.")])]),e._v(" "),l("tr",[l("td",[e._v("K")]),e._v(" "),l("td",[e._v("G")]),e._v(" "),l("td",[e._v("Borçlu müşteri kabul ettikten sonra ödeme sistemine iletilmesi durumlarında güncellenmelidir. G durumu Alacaklı ÖHS'ye iletilmemelidir. Borçlu ÖHS tarafında ödeme sistemine iletilen bir ödeme iste talebinin durumunun iptal edilememesi bu durum kodu ile sağlanmalıdır.")]),e._v(" "),l("td",[e._v("-")])]),e._v(" "),l("tr",[l("td",[e._v("G")]),e._v(" "),l("td",[e._v("O")]),e._v(" "),l("td",[e._v("Ödeme sistemine iletilen bir ödemenin gerçekleşmesi durumlarında güncellenmelidir.")]),e._v(" "),l("td",[e._v("-")])]),e._v(" "),l("tr",[l("td",[e._v("K")]),e._v(" "),l("td",[e._v("O")]),e._v(" "),l("td",[e._v("-")]),e._v(" "),l("td",[e._v("Borçlu ÖHS tarafından ödemenin gerçekleştiğine dair ödeme iste yanıt'ı ile bildirim yaptığında veya FAST tarafından gelecek olumlu mesaj ile güncellenebilecek durumdur.")])]),e._v(" "),l("tr",[l("td",[e._v("K")]),e._v(" "),l("td",[e._v("I")]),e._v(" "),l("td",[e._v("Borçlu müşteri kabul ettikten sonra ödeme sisteminde olumsuz olması ve işlem gerçekleşmemesi durumlarında güncellenebilecek durumdur.I durumu Alacaklı ÖHS'ye iletilmelidir.")]),e._v(" "),l("td",[e._v("Borçlu müşteri kabul ettikten sonra ödeme sisteminde olumsuz olması ve işlem gerçekleşmemesi durumlarında FAST'tan ya da Borçlu ÖHS'den gönderilecek OdemeIsteYanit Nesnesi ile I durumuyla güncellenmelidir.")])]),e._v(" "),l("tr",[l("td",[e._v("O")]),e._v(" "),l("td",[e._v("-")]),e._v(" "),l("td",[e._v("O statüsünden farklı bir statüye güncelleme yapılamayacaktır.")]),e._v(" "),l("td",[e._v("O statüsünden farklı bir statüye güncelleme yapılamayacaktır.")])]),e._v(" "),l("tr",[l("td",[e._v("I")]),e._v(" "),l("td",[e._v("-")]),e._v(" "),l("td",[e._v("I statüsünden farklı bir statüye güncelleme yapılamayacaktır.")]),e._v(" "),l("td",[e._v("I statüsünden farklı bir statüye güncelleme yapılamayacaktır.")])])])])])}),[],!1,null,null,null);i.default=t.exports}}]);