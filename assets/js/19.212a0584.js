(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{451:function(e,a,i){"use strict";i.r(a);var l=i(62),r=Object(l.a)({},(function(){var e=this,a=e.$createElement,i=e._self._c||a;return i("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[i("h1",{attrs:{id:"_6-odeme-iste-kullanım-modelleri-ve-fonksiyonlar"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#_6-odeme-iste-kullanım-modelleri-ve-fonksiyonlar"}},[e._v("#")]),e._v(" 6. Ödeme İste Kullanım Modelleri ve Fonksiyonlar")]),e._v(" "),i("h2",{attrs:{id:"_6-1-odeme-iste-kullanım-modelleri"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#_6-1-odeme-iste-kullanım-modelleri"}},[e._v("#")]),e._v(" 6.1 Ödeme İste Kullanım Modelleri")]),e._v(" "),i("p",[e._v("İşyeri isteği modeli kullanarak Öİ Kurumsal API üzerinden ödeme iste talebi başlatabilir. Kullanacağı modele göre API'de gönderilmesi gereken alanlara dikkat edilmelidir.")]),e._v(" "),i("ul",[i("li",[e._v("Şimdi Kabul: (SGZ-ÖİOZ) = 180 saniye")]),e._v(" "),i("li",[e._v("Sonra Kabul: (SGZ-ÖİOZ) > 180 saniye")]),e._v(" "),i("li",[e._v("Hemen Öde: TEÖZ boş olarak iletildiğinde = Alacaklı Öİ'yi oluşturduğu andan itibaren ödeme yapılmasını talep etmektedir. (ödeme iste talebine olumlu yanıt verildiği anda ödeme işlemi başlatılır.)")]),e._v(" "),i("li",[e._v("Sonra Öde: TEÖZ ≥ SGZ (Alacaklı, ödeme iste mesajının içerisine ödeme ile ilgili zaman bilgisi eklemiştir.)")]),e._v(" "),i("li",[e._v("TEÖZ, SGZ alanı ile birlikte yorumlandığında;"),i("br"),e._v(" "),i("br"),e._v("Şimdi Kabul/Hemen Öde,\n"),i("br"),e._v("Şimdi Kabul/Sonra Öde,\n"),i("br"),e._v("Sonra Kabul/Sonra Öde,\n"),i("br"),e._v("Sonra Kabul/Hemen Öde")])]),e._v(" "),i("p",[e._v("şeklinde modeller kullanılabilir.")]),e._v(" "),i("h2",{attrs:{id:"_6-1-1-sonra-kabul-hemen-ode"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#_6-1-1-sonra-kabul-hemen-ode"}},[e._v("#")]),e._v(" 6.1.1 Sonra Kabul - Hemen Öde")]),e._v(" "),i("p",[e._v("Bu modelde, SGZ ile ÖİOZ arasındaki fark 180 saniyeden daha uzun bir süre olacak şekilde tanımlanarak “Sonra Kabul” işlemi olarak değerlendirilir. Ayrıca Alacaklı, ödeme iste talebini gönderdiği andan itibaren ödeme yapılmasını talep ettiği için ödeme iste talebinin kabul edilmesi durumunda, kabul anında ödemenin başlatılmasını beklemektedir. TEÖZ boş olduğu bu işlem “Hemen Öde” olarak değerlendirilmelidir.")]),e._v(" "),i("p",[e._v("Söz konusu senaryonun hesaplar arası (P2P) ödemelerde kullanılabileceği değerlendirilmektedir.")]),e._v(" "),i("h2",{attrs:{id:"_6-1-2-sonra-kabul-sonra-ode"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#_6-1-2-sonra-kabul-sonra-ode"}},[e._v("#")]),e._v(" 6.1.2 Sonra Kabul - Sonra Öde")]),e._v(" "),i("p",[e._v("Bu modelde, SGZ ile ÖİOZ arasındaki fark 180 saniyeden daha uzun bir süre olacak şekilde tanımlanarak “Sonra Kabul” işlemi olarak değerlendirilir. Sonra Kabul – Hemen Öde modelinden farklı olarak bu modelde TEÖZ alanının Öİ mesajının içerisinde yer almasıdır. TEÖZ ≥ SGZ olarak iletildiğinde “Sonra Öde” olarak değerlendirilir.")]),e._v(" "),i("h2",{attrs:{id:"_6-1-3-simdi-kabul-hemen-ode"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#_6-1-3-simdi-kabul-hemen-ode"}},[e._v("#")]),e._v(" 6.1.3 Şimdi Kabul - Hemen Öde")]),e._v(" "),i("p",[e._v("Bu modelde, SGZ ile ÖİOZ arasındaki fark 180 saniye olacak şekilde tanımlanarak “Şimdi Kabul” işlemi olarak değerlendirilir. Alacaklı, Borçlu’nun en geç 180 saniye içerisinde ödeme iste talebine yanıt vermesini beklemektedir. Alacaklı, ödeme iste talebini gönderdiği andan itibaren ödeme yapılmasını talep ettiği için ödeme iste talebinin kabul edilmesi durumunda, kabul anında (anlık) ödemenin başlatılmasını beklemektedir.")]),e._v(" "),i("p",[e._v("SGZ ile ÖİOZ arasındaki zaman 180 saniye ve TEÖZ boş olarak iletildiğinde işlem “Şimdi Kabul - Hemen Öde” olarak değerlendirilmelidir.")]),e._v(" "),i("p",[e._v("Söz konusu senaryonun işyeri ödemelerinde kullanılabileceği değerlendirilmektedir.")]),e._v(" "),i("h2",{attrs:{id:"_6-2-fonksiyonlar"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#_6-2-fonksiyonlar"}},[e._v("#")]),e._v(" 6.2 Fonksiyonlar")]),e._v(" "),i("p",[e._v("Fonksiyonlar API deseninde zorunlu olarak gönderilmelidir. Kullanılması istenmeyen fonksiyon için varsayılan değer E ya da H olarak gönderilebilir. Örneğin; işyeri tarafından kısmi ödeme yapılması istenmiyor ise müşteriye sunulmadan API'de varsayılan H değeri olarak gönderilmelidir.")]),e._v(" "),i("ul",[i("li",[e._v("Kısmi Ödeme")]),e._v(" "),i("li",[e._v("Erken Ödeme")]),e._v(" "),i("li",[e._v("Ödeme Erteleme")])]),e._v(" "),i("h2",{attrs:{id:"_6-2-1-kısmi-odeme"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#_6-2-1-kısmi-odeme"}},[e._v("#")]),e._v(" 6.2.1 Kısmi Ödeme")]),e._v(" "),i("p",[e._v("Kısmi Ödeme, bir borcun tamamını değil, belirli bir miktarının ödenmesidir.")]),e._v(" "),i("p",[e._v("Kısmi ödeme yapıldığında işlem sona erer. Kalan tutar işyeri sorumluluğundadır. İşyeri tarafından istenirse yeniden ödeme iste talebi yapılabilir.")]),e._v(" "),i("p",[e._v("İşyeri tarafından kısmi ödeme fonksiyonu müşteri ekranlarında müşteriye seçim olarak sunulabilir ya da müşteriye seçim yaptırılmadan ödeme iste talebinde varsayılan E/H olarak gönderilebilir.")]),e._v(" "),i("p",[e._v("Tüm modellerde kullanılabilir. Kullanım detayları OdemeIsteTalebi ve Odeme Iste İstek Nesnesi içerisinde belirtilmektedir.")]),e._v(" "),i("h2",{attrs:{id:"_6-2-2-erken-odeme"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#_6-2-2-erken-odeme"}},[e._v("#")]),e._v(" 6.2.2 Erken Ödeme")]),e._v(" "),i("p",[e._v("Erken ödeme, bir borcun talep edilen ödeme zamanından (TEÖZ) önce ödenebilmesine imkan tanır.")]),e._v(" "),i("p",[e._v("Sonra Öde modellerinde kullanılabilir. Hemen Öde modellerinde varsayılan 'E' olarak gönderilmelidir.")]),e._v(" "),i("p",[e._v('İşyeri tarafından erken ödeme parametresi "E" olarak iletildiğinde ödeme iste talebi ÖİOZ ile TEÖZ arasında seçilen bir tarihte gerçekleştirilebilir.')]),e._v(" "),i("h2",{attrs:{id:"_6-2-3-odeme-erteleme"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#_6-2-3-odeme-erteleme"}},[e._v("#")]),e._v(" 6.2.3 Ödeme Erteleme")]),e._v(" "),i("p",[e._v("Ödeme Erteleme, bir borcun talep edilen ödeme zamanından (TEÖZ) sonra ödenebilmesine imkan tanır.")]),e._v(" "),i("p",[e._v("Sonra Öde modellerinde kullanılabilir. Hemen Öde modellerinde varsayılan 'H' olarak gönderilmelidir.")]),e._v(" "),i("p",[e._v('İşyeri tarafından ödeme erteleme parametresi "E" olarak iletildiğinde vadeTarihi ve vadeTutarı alanları da iletileceğinden bu değerler işyeri tarafından gönderilir.')]),e._v(" "),i("p",[e._v("İşyeri tarafından ödeme iste talebi vade tarihi, TEÖZ’den maksimum 3 ay sonrasına kadar ertelenebilir olmalıdır.")]),e._v(" "),i("p",[e._v("Kısmi ödeme ve ödeme erteleme birlikte kullanılarak ödeme iste talebi başlatılabilir. Ancak borçlu müşteri vade tarihi ve vade tutarı seçimi yaparak ödeme iste talebini kabul ettiğinde kısmi ödeme yapılmasına izin verilmemelidir.")])])}),[],!1,null,null,null);a.default=r.exports}}]);