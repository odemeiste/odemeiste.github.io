(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{424:function(e,a,i){e.exports=i.p+"assets/img/OdemeIsteOdemeHazirlik.46c76371.png"},425:function(e,a,i){e.exports=i.p+"assets/img/OdemeIsteOdemeSorgulama.5930b959.png"},426:function(e,a,i){e.exports=i.p+"assets/img/OdemeIste.650a07b5.png"},427:function(e,a,i){e.exports=i.p+"assets/img/OdemeIsteIptal.2e12873b.png"},444:function(e,a,i){"use strict";i.r(a);var t=i(62),v=Object(t.a)({},(function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("p",[t("strong",[e._v("Ödeme İste Hizmeti için Erişim Adresleri (Endpoints)")])]),e._v(" "),t("p",[t("strong",[e._v("Tablo 7: Ödeme Emri Başlatma Hizmeti İçin Erişim Adresleri")])]),e._v(" "),t("p",[t("strong",[e._v('Etki Alanı (Scope) ="odeme_iste"')])]),e._v(" "),t("table",[t("thead",[t("tr",[t("th",[e._v("No")]),e._v(" "),t("th",[e._v("Kaynak")]),e._v(" "),t("th",[e._v("HTTP işlemi")]),e._v(" "),t("th",[e._v("Erişim Adresi")]),e._v(" "),t("th",[e._v("Zorunlu / İsteğe Bağlı")]),e._v(" "),t("th",[e._v("Yetkilendirme Türü")]),e._v(" "),t("th",[e._v("İmzalama")]),e._v(" "),t("th",[e._v("İstem Nesnesi")]),e._v(" "),t("th",[e._v("Yanıt Nesnesi")]),e._v(" "),t("th",[e._v("ÖHS Rolü")])])]),e._v(" "),t("tbody",[t("tr",[t("td",[e._v("1")]),e._v(" "),t("td",[e._v("odeme-iste")]),e._v(" "),t("td",[e._v("POST")]),e._v(" "),t("td",[e._v("/odeme-iste")]),e._v(" "),t("td",[e._v("Z")]),e._v(" "),t("td",[e._v("İstemci Kimlik Bilgileri")]),e._v(" "),t("td",[e._v("İmzalı İstek ve Yanıt")]),e._v(" "),t("td",[e._v("OdemeIsteTalebi")]),e._v(" "),t("td",[e._v("OdemeIste")]),e._v(" "),t("td",[e._v("Borçlu")])]),e._v(" "),t("tr",[t("td",[e._v("2")]),e._v(" "),t("td",[e._v("odeme-iste")]),e._v(" "),t("td",[e._v("GET")]),e._v(" "),t("td",[e._v("/odeme-iste/{odemeIsteRefNo}")]),e._v(" "),t("td",[e._v("Z")]),e._v(" "),t("td",[e._v("İstemci Kimlik Bilgileri")]),e._v(" "),t("td",[e._v("İmzalı Yanıt")]),e._v(" "),t("td"),e._v(" "),t("td",[e._v("OdemeIste")]),e._v(" "),t("td",[e._v("Borçlu")])]),e._v(" "),t("tr",[t("td",[e._v("3")]),e._v(" "),t("td",[e._v("odeme-iste")]),e._v(" "),t("td",[e._v("DELETE")]),e._v(" "),t("td",[e._v("/odeme-iste/{odemeIsteRefNo}")]),e._v(" "),t("td",[e._v("Z")]),e._v(" "),t("td",[e._v("İstemci Kimlik Bilgileri")]),e._v(" "),t("td"),e._v(" "),t("td"),e._v(" "),t("td"),e._v(" "),t("td",[e._v("Borçlu")])]),e._v(" "),t("tr",[t("td",[e._v("4")]),e._v(" "),t("td",[e._v("odeme-iste-yanit")]),e._v(" "),t("td",[e._v("PUT")]),e._v(" "),t("td",[e._v("/odeme-iste-yanit/{odemeIsteRefNo}")]),e._v(" "),t("td",[e._v("Z")]),e._v(" "),t("td",[e._v("İstemci Kimlik Bilgileri")]),e._v(" "),t("td",[e._v("İmzalı İstek")]),e._v(" "),t("td",[e._v("OdemeIsteYaniti")]),e._v(" "),t("td"),e._v(" "),t("td",[e._v("Alacaklı")])]),e._v(" "),t("tr",[t("td",[e._v("5")]),e._v(" "),t("td",[e._v("sistem-olay-dinleme")]),e._v(" "),t("td",[e._v("POST")]),e._v(" "),t("td",[e._v("/sistem-olay-dinleme")]),e._v(" "),t("td",[e._v("Z")]),e._v(" "),t("td",[e._v("İstemci Kimlik Bilgileri")]),e._v(" "),t("td",[e._v("-")]),e._v(" "),t("td",[e._v("Olay")]),e._v(" "),t("td",[e._v("-")]),e._v(" "),t("td",[e._v("Bu endpoint sadece BKM tarafından çağırılacaktır.")])])])]),e._v(" "),t("h2",{attrs:{id:"_7-1-adim-0-alacaklı-nın-borclu-ya-odeme-iste-talebinde-bulunması"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_7-1-adim-0-alacaklı-nın-borclu-ya-odeme-iste-talebinde-bulunması"}},[e._v("#")]),e._v(" 7.1. ADIM 0: Alacaklı'nın Borçlu’ya Ödeme İste talebinde bulunması:")]),e._v(" "),t("p",[e._v("Borçlu, ÖHS uygulamasında (mobil Uygulama/ web arayüzü) Ödeme İste için Alacaklı’ya talepte bulunur.")]),e._v(" "),t("h2",{attrs:{id:"_7-2-adim-1-odeme-isteginin-olusturulması"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_7-2-adim-1-odeme-isteginin-olusturulması"}},[e._v("#")]),e._v(" 7.2. ADIM 1: Ödeme İsteğinin Oluşturulması")]),e._v(" "),t("p",[e._v("Alacaklı ÖHS ile Alacaklı IBAN bilgileri uyumlu olmalıdır. Alacaklı IBAN bilgisinin Alacaklı ÖHS koduna ait olduğu kontrolü Borçlu tarafından yapılmalıdır.")]),e._v(" "),t("p",[t("strong",[e._v("Şekil 7 : Ödeme İsteğinin Hazırlanması")])]),e._v(" "),t("img",{attrs:{src:i(424),width:"80%"}}),e._v(" "),t("p",[t("strong",[e._v("BAŞARILI İSTEK ve YANIT :")])]),e._v(" "),t("p",[t("strong",[e._v("Tablo 8: OdemeIsteTalebi ve Odeme Iste Nesnesi")])]),e._v(" "),t("p",[t("strong",[e._v("Z: Zorunlu, K: Koşullu, İ: İsteğe Bağlı, N/A: Yok")])]),e._v(" "),t("table",[t("thead",[t("tr",[t("th",[e._v("Alan Adı")]),e._v(" "),t("th",[e._v("Json Alan Adı")]),e._v(" "),t("th",[e._v("Format: Veri Modeli İsmi")]),e._v(" "),t("th",[e._v("Açıklama")]),e._v(" "),t("th",[e._v("İstek")]),e._v(" "),t("th",[e._v("Yanıt")]),e._v(" "),t("th",[e._v("FAST A01 Mesaj Mapping")])])]),e._v(" "),t("tbody",[t("tr",[t("td",[e._v("Katılımcı Bilgisi")]),e._v(" "),t("td",[e._v("katilimciBilgi")]),e._v(" "),t("td",[e._v("Kompleks:KatilimciBilgisi")]),e._v(" "),t("td",[e._v("Katılımcılara atanmış kod bilgileridir.")]),e._v(" "),t("td",[e._v("Z")]),e._v(" "),t("td",[e._v("Z")]),e._v(" "),t("td")]),e._v(" "),t("tr",[t("td",[e._v("> Alacaklı ÖHS Kod")]),e._v(" "),t("td",[e._v("alacakliOhsKod")]),e._v(" "),t("td",[e._v("AN4")]),e._v(" "),t("td",[e._v("Alacaklı ÖHS’ye ait kuruluş kodu")]),e._v(" "),t("td",[e._v("Z")]),e._v(" "),t("td",[e._v("Z")]),e._v(" "),t("td")]),e._v(" "),t("tr",[t("td",[e._v("> Borçlu ÖHS Kod")]),e._v(" "),t("td",[e._v("borcluOhsKod")]),e._v(" "),t("td",[e._v("AN4")]),e._v(" "),t("td",[e._v("Borçlu ÖHS’ye ait kuruluş kodu")]),e._v(" "),t("td",[e._v("Z")]),e._v(" "),t("td",[e._v("Z")]),e._v(" "),t("td")]),e._v(" "),t("tr",[t("td",[e._v("Alacaklı Bilgisi")]),e._v(" "),t("td",[e._v("alacakliBilgi")]),e._v(" "),t("td",[e._v("Kompleks:AlacakliBilgi")]),e._v(" "),t("td",[e._v("Alacaklıya ait bilgilerdir.")]),e._v(" "),t("td",[e._v("Z")]),e._v(" "),t("td",[e._v("Z")]),e._v(" "),t("td")]),e._v(" "),t("tr",[t("td",[e._v("> Alacaklı Hesap/Müşteri Tipi")]),e._v(" "),t("td",[e._v("musteriTipi")]),e._v(" "),t("td",[e._v("AN1")]),e._v(" "),t("td",[e._v("Alacaklı müşterinin hesap numarasına ilişkin Ticari-Bireysel hesap bilgisi ayrımının belirtildiği alandır.  Ödeme İste Sistemi'nde tanımlı değerlerden biri olmalıdır."),t("br"),e._v("B:Bireysel "),t("br"),e._v("T: Ticari")]),e._v(" "),t("td",[e._v("Z")]),e._v(" "),t("td",[e._v("Z")]),e._v(" "),t("td")]),e._v(" "),t("tr",[t("td",[e._v("> Kimlik")]),e._v(" "),t("td",[e._v("kimlik")]),e._v(" "),t("td",[e._v("Kompleks:Kimlik")]),e._v(" "),t("td"),e._v(" "),t("td",[e._v("Z")]),e._v(" "),t("td",[e._v("Z")]),e._v(" "),t("td")]),e._v(" "),t("tr",[t("td",[e._v(">> Alacaklı Kimlik Tipi")]),e._v(" "),t("td",[e._v("kimlikTipi")]),e._v(" "),t("td",[e._v("AN1")]),e._v(" "),t("td",[e._v("TR.OIS.DataCode.KimlikTur sıralı veri türü değerlerinden birini alır.")]),e._v(" "),t("td",[e._v("Z")]),e._v(" "),t("td",[e._v("Z")]),e._v(" "),t("td")]),e._v(" "),t("tr",[t("td",[e._v(">> Alacaklı Kimlik No ( TCKN/VKN/YKN/Pasaport No )")]),e._v(" "),t("td",[e._v("kimlikDegeri")]),e._v(" "),t("td",[e._v("AN7..11")]),e._v(" "),t("td",[e._v("Alacaklı müşteriye ait geçerli bir TC Kimlik Numarası, Vergi Kimlik Numarası, Yabancı Kimlik Numarası ya da Pasaport Numarası bilgilerinden birinin bulunduğu alandır.")]),e._v(" "),t("td",[e._v("Z")]),e._v(" "),t("td",[e._v("Z")]),e._v(" "),t("td",[e._v("AlKmlkN")])]),e._v(" "),t("tr",[t("td",[e._v("> Hesap")]),e._v(" "),t("td",[e._v("hesap")]),e._v(" "),t("td",[e._v("Kompleks:Hesap")]),e._v(" "),t("td"),e._v(" "),t("td",[e._v("Z")]),e._v(" "),t("td",[e._v("Z")]),e._v(" "),t("td")]),e._v(" "),t("tr",[t("td",[e._v(">> Alacaklı Ad Soyad/Ticari Unvan")]),e._v(" "),t("td",[e._v("hesapSahibi")]),e._v(" "),t("td",[e._v("AN3..140")]),e._v(" "),t("td",[e._v("Alacaklı müşterinin ad-soyad veya ticari ünvan bilgisidir. "),t("br"),e._v("İşyeri için ilgili acquirer üye tarafından tahsis edilmiş olan işyeri adı bilgisidir.(Merchant Name) İşyerinin sık kullanılan adı ya da tabela ünvanı olmalıdır."),t("br"),e._v(" Alfanumerik karakterler, '.' , '-' , '&' ve boşluk karakteri içerebilir.Borçlu ÖHS’ye Alacaklı ÖHS tarafından Unvan bilgisi açık bir şekilde iletilmelidir. Borçluya ÖHS ekranlarında gösterimi açık olmalıdır.")]),e._v(" "),t("td",[e._v("Z")]),e._v(" "),t("td",[e._v("Z")]),e._v(" "),t("td",[e._v("AlAd")])]),e._v(" "),t("tr",[t("td",[e._v(">> Alacaklı IBAN")]),e._v(" "),t("td",[e._v("hesapNo")]),e._v(" "),t("td",[e._v("AN26")]),e._v(" "),t("td",[e._v("Alacaklı müşteriye ait bir IBAN olmalıdır. TR ile başlamalı ve 26 karakter uzunluğunda iletilmelidir.Borçlu ÖHS’ye Alacaklı ÖHS tarafından IBAN açık bir şekilde iletilmelidir. Borçluya ÖHS ekranlarında gösterimi açık olmalıdır.")]),e._v(" "),t("td",[e._v("Z")]),e._v(" "),t("td",[e._v("Z")]),e._v(" "),t("td",[e._v("AlHesN")])]),e._v(" "),t("tr",[t("td",[e._v("Borçlu Bilgisi")]),e._v(" "),t("td",[e._v("borcluBilgi")]),e._v(" "),t("td",[e._v("Kompleks:BorcluBilgi")]),e._v(" "),t("td",[e._v("Borçluya ait bilgilerdir.")]),e._v(" "),t("td",[e._v("Z")]),e._v(" "),t("td",[e._v("Z")]),e._v(" "),t("td")]),e._v(" "),t("tr",[t("td",[e._v("> Hesap")]),e._v(" "),t("td",[e._v("hesap")]),e._v(" "),t("td",[e._v("Komlepks:Hesap")]),e._v(" "),t("td"),e._v(" "),t("td",[e._v("Z")]),e._v(" "),t("td",[e._v("Z")]),e._v(" "),t("td")]),e._v(" "),t("tr",[t("td",[e._v(">> Borçlu Ad Soyad/Ticari Unvan")]),e._v(" "),t("td",[e._v("hesapSahibi")]),e._v(" "),t("td",[e._v("AN3..140")]),e._v(" "),t("td",[e._v("Borçlu müşterinin ad-soyad veya ticari ünvan bilgisidir.İşyeri için ilgili acquirer üye tarafından tahsis edilmiş olan işyeri adı bilgisidir.(Mercant Name)İşyerinin sık kullanılan adı ya da tabela ünvanı olmalıdır.Alfanumerik karakterler, '.' , '-' , '&' ve boşluk karakteri içerebilir.")]),e._v(" "),t("td",[e._v("Z")]),e._v(" "),t("td",[e._v("Z")]),e._v(" "),t("td")]),e._v(" "),t("tr",[t("td",[e._v(">> Borçlu IBAN")]),e._v(" "),t("td",[e._v("hesapNo")]),e._v(" "),t("td",[e._v("AN26")]),e._v(" "),t("td",[e._v("Borçlu müşteriye ait bir IBAN olmalıdır. TR ile başlamalı ve 26 karakter uzunluğunda iletilmelidir. Borçlu IBAN gönderimi zorunludur. Borçlu IBAN bilgisi borçlu müşteri tarafından değiştirilebilir.Bu sebeple istekte iletilen IBAN bilgisi alacaklı ÖHS tarafından kontrol edilmemelidir.")]),e._v(" "),t("td",[e._v("Z")]),e._v(" "),t("td",[e._v("Z")]),e._v(" "),t("td")]),e._v(" "),t("tr",[t("td",[e._v("> KOLAS Referans Numarası")]),e._v(" "),t("td",[e._v("kolasRefNo")]),e._v(" "),t("td",[e._v("N12")]),e._v(" "),t("td",[e._v("Kolay Adres bilgisi ile başlatılan Ödeme İste taleplerinde, Borçlu müşteriye ait Kolay Adres bilgisine ait hesap bilgisine erişebilmek amacıyla Alıcı müşterinin Ödeme Hizmet Sağlayıcısı tarafından KOLAS’a iletilen Alıcı Sorgu mesajına KOLAS tarafından dönülen referans numarasıdır.")]),e._v(" "),t("td",[e._v("K")]),e._v(" "),t("td",[e._v("K")]),e._v(" "),t("td")]),e._v(" "),t("tr",[t("td",[e._v("> TR Karekod Referans Numarası")]),e._v(" "),t("td",[e._v("karekodRefNo")]),e._v(" "),t("td",[e._v("AN1..12")]),e._v(" "),t("td",[e._v("TR Karekod ile başlatılan Ödeme İste taleplerinde TR Karekod için oluşturulan tekil referans numarasıdır. İşyeri uygulaması veya TR Karekod üreticisi tarafından sağlanır ve uçtan uca doğrulama, işlem kaydı veya fiş oluşturmada kullanılır.")]),e._v(" "),t("td",[e._v("K")]),e._v(" "),t("td",[e._v("K")]),e._v(" "),t("td")]),e._v(" "),t("tr",[t("td",[e._v("Tutar Bilgileri")]),e._v(" "),t("td",[e._v("tutarBilgi")]),e._v(" "),t("td",[e._v("Kompleks: TutarBilgi")]),e._v(" "),t("td"),e._v(" "),t("td",[e._v("Z")]),e._v(" "),t("td",[e._v("Z")]),e._v(" "),t("td")]),e._v(" "),t("tr",[t("td",[e._v("> Tutar")]),e._v(" "),t("td",[e._v("tutar")]),e._v(" "),t("td",[e._v("AN1..24")]),e._v(" "),t("td",[e._v("Alacaklı ÖHS’nin önyüzde kullanıcıdan aldığı tutar bilgisidir.")]),e._v(" "),t("td",[e._v("Z")]),e._v(" "),t("td",[e._v("Z")]),e._v(" "),t("td",[e._v("Ttr")])]),e._v(" "),t("tr",[t("td",[e._v("> Para Birimi")]),e._v(" "),t("td",[e._v("paraBirimi")]),e._v(" "),t("td",[e._v("AN3")]),e._v(" "),t("td",[e._v("Para birimi. FAST işlemleri kapsamında sadece TL gönderimi olacaktır.")]),e._v(" "),t("td",[e._v("Z")]),e._v(" "),t("td",[e._v("Z")]),e._v(" "),t("td")]),e._v(" "),t("tr",[t("td",[e._v("Ödeme İste Talep Detayı")]),e._v(" "),t("td",[e._v("talepDetayi")]),e._v(" "),t("td",[e._v("Kompleks:TalepDetay")]),e._v(" "),t("td"),e._v(" "),t("td",[e._v("Z")]),e._v(" "),t("td",[e._v("Z")]),e._v(" "),t("td")]),e._v(" "),t("tr",[t("td",[e._v("> Ödeme İste Referans Numarası")]),e._v(" "),t("td",[e._v("odemeIsteRefNo")]),e._v(" "),t("td",[e._v("AN41")]),e._v(" "),t("td",[e._v("Ödeme İste sistemi numarasıdır.Alacaklı ÖHS tarafından oluşturulmalıdır. Ödeme İste Referans Numarası'nın son 6 karakteri, alacaklı ile borçlu müşteriye işlem sırasında ilgili ekranlarda gösterilmelidir.Alacaklıya Ödeme İste talebi oluşturulacağı ekranda, borçluya ise ödeme iste detayının verildiği ekranda gösterilmelidir. "),t("br"),e._v("Önerilen Format:  "),t("br"),e._v("{alacakliOhsKodu}-{guid}  "),t("br"),e._v("Örn: 8000- f534e8f2-9fbf-48cc-914b-12fbaffd8104    (size: 41)")]),e._v(" "),t("td",[e._v("Z")]),e._v(" "),t("td",[e._v("Z")]),e._v(" "),t("td",[e._v("OiRef")])]),e._v(" "),t("tr",[t("td",[e._v("> Ödeme İste Oluşturulma Zamanı")]),e._v(" "),t("td",[e._v("odemeIsteOlusturulmaZamani")]),e._v(" "),t("td",[e._v("ISODateTime")]),e._v(" "),t("td",[e._v("Kaydın ilk oluşturulduğu gün ve zaman bilgisini içerir. YYYY-MM-DDThh:mm:ss+03:00 formatında Ödeme İste Sistemi tarafından oluşturulur.")]),e._v(" "),t("td",[e._v("Z")]),e._v(" "),t("td",[e._v("Z")]),e._v(" "),t("td")]),e._v(" "),t("tr",[t("td",[e._v("> Ödeme İste Akış Türü")]),e._v(" "),t("td",[e._v("akisTur")]),e._v(" "),t("td",[e._v("AN2")]),e._v(" "),t("td",[e._v("01: Kişiden Kişiye"),t("br"),e._v("02: İşyeri Ödemesi")]),e._v(" "),t("td",[e._v("Z")]),e._v(" "),t("td",[e._v("Z")]),e._v(" "),t("td",[e._v("OiAksTur")])]),e._v(" "),t("tr",[t("td",[e._v("> Ödeme Amacı")]),e._v(" "),t("td",[e._v("odemeAmaci")]),e._v(" "),t("td",[e._v("AN2")]),e._v(" "),t("td",[e._v("TR.OIS.DataCode.OdemeAmaci sıralı veri değerlerinden birini alır. Borçlu bu bilgiyi değiştiremeyecektir.Sadece alacaklı seçebilir.")]),e._v(" "),t("td",[e._v("Z")]),e._v(" "),t("td",[e._v("Z")]),e._v(" "),t("td",[e._v("OdmAmc")])]),e._v(" "),t("tr",[t("td",[e._v("> Son Geçerlilik Zamanı (SGZ)")]),e._v(" "),t("td",[e._v("sonGecerlilikZamani")]),e._v(" "),t("td",[e._v("ISODateTime")]),e._v(" "),t("td",[e._v("Borçlu’nun Öİ talebine yanıt verebileceği son zaman bilgisidir. Bu zamandan sonra Öİ talebi geçersiz sayılacaktır. Son geçerlilik zamanı Öİ Oluşturulma Zamanından en fazla 3 ay sonrası olabilir.Alacaklı müşteri tarafından ödeme isteği oluşturulurken seçilir."),t("br"),e._v("Bugün : 31.11.2019"),t("br"),e._v("Bugün + 3 Ay : 29.02.2020"),t("br"),e._v("Bugün : 30.09.2022"),t("br"),e._v("Bugün + 3 Ay : 30.12.2022"),t("br"),e._v("Bugün : 14.07.2022"),t("br"),e._v("Bugün + 3 Ay : 14.10.2022")]),e._v(" "),t("td",[e._v("Z")]),e._v(" "),t("td",[e._v("Z")]),e._v(" "),t("td")]),e._v(" "),t("tr",[t("td",[e._v(">Talep Edilen Ödeme Zamanı (TEÖZ)")]),e._v(" "),t("td",[e._v("talepEdilenOdemeZamani")]),e._v(" "),t("td",[e._v("ISODateTime")]),e._v(" "),t("td",[e._v("Alacaklı’nın, Öİ talimatı içerisinde yer alan ve ödemenin yapılmasını talep ettiği tarih/zaman bilgisidir.Hemen Öde seçeneğinde TEÖZ bilgisi boş iletilmelidir.Dolu iletilmesi durumunda borçlu ÖHS tarafından hata mesajı üretilmelidir."),t("br"),e._v("TEÖZ tarih formatı:"),t("br"),e._v("YYYY-MM-DDThh:mm:ss")]),e._v(" "),t("td",[e._v("Z")]),e._v(" "),t("td",[e._v("Z")]),e._v(" "),t("td")]),e._v(" "),t("tr",[t("td",[e._v("> İşlem Açıklaması")]),e._v(" "),t("td",[e._v("islemAciklamasi")]),e._v(" "),t("td",[e._v("AN1..200")]),e._v(" "),t("td",[e._v("Alacaklı tarafından Borçlu'ya iletilecek Açıklama bilgisidir.Borçlu açıklamayı güncelleyebilmelidir.Borçlu Açıklama bilgisi FAST mesajına taşınacaktır.")]),e._v(" "),t("td",[e._v("İ")]),e._v(" "),t("td",[e._v("İ")]),e._v(" "),t("td",[e._v("Acklm")])]),e._v(" "),t("tr",[t("td",[e._v("Ödeme İste Yanıt Detayı")]),e._v(" "),t("td",[e._v("yanitDetayi")]),e._v(" "),t("td",[e._v("Kompleks:YanıtDetayı")]),e._v(" "),t("td"),e._v(" "),t("td",[e._v("NA")]),e._v(" "),t("td",[e._v("Z")]),e._v(" "),t("td")]),e._v(" "),t("tr",[t("td",[e._v("> Ödeme İste Durumu")]),e._v(" "),t("td",[e._v("odemeIsteDurumu")]),e._v(" "),t("td",[e._v("AN1")]),e._v(" "),t("td",[e._v("TR.OIS.DataCode.OdemeIsteDurumu sıralı veri tipini değerlerinden birini alır. Örn; ödeme iste'ye ait ilk istek mesajına dönüşte “B: Yanıt Bekleniyor” değerini alması beklenir.")]),e._v(" "),t("td",[e._v("NA")]),e._v(" "),t("td",[e._v("Z")]),e._v(" "),t("td")]),e._v(" "),t("tr",[t("td",[e._v("> Ödeme İste İptal Detay Kodu")]),e._v(" "),t("td",[e._v("odemeIsteIptalDetayKodu")]),e._v(" "),t("td",[e._v("AN2")]),e._v(" "),t("td",[e._v("Rıza durumunun iptal olduğu durumda zorunludur.")]),e._v(" "),t("td",[e._v("NA")]),e._v(" "),t("td",[e._v("K")]),e._v(" "),t("td")]),e._v(" "),t("tr",[t("td",[e._v("> Borçlu Yanıt Zamanı")]),e._v(" "),t("td",[e._v("borcluYanitZamani")]),e._v(" "),t("td",[e._v("ISODateTime")]),e._v(" "),t("td",[e._v("Kabul ya da red durumunda gönderilebilecektir.")]),e._v(" "),t("td",[e._v("NA")]),e._v(" "),t("td",[e._v("K")]),e._v(" "),t("td")]),e._v(" "),t("tr",[t("td",[e._v("> Beklenen Ödeme Tarihi")]),e._v(" "),t("td",[e._v("beklenenOdemeTarihi")]),e._v(" "),t("td",[e._v("ISODate")]),e._v(" "),t("td",[e._v("Borçlu’nun ödemeyi taahhüt ettiği tarih bilgisidir. Sonra öde seçeneklerinde Borçlu’nun ödeme yapacağı tarih bilgisidir. Hemen öde seçeneklerinde ise Borçlu’nun kabul ettiği tarih bilgisidir.")]),e._v(" "),t("td",[e._v("NA")]),e._v(" "),t("td",[e._v("K")]),e._v(" "),t("td")]),e._v(" "),t("tr",[t("td",[e._v("> Ödeme Sistemi Gönderim Zamanı")]),e._v(" "),t("td",[e._v("odemeSistemineGonderimZamani")]),e._v(" "),t("td",[e._v("ISODateTime")]),e._v(" "),t("td",[e._v("Borçlu ÖHS tarafından ödemenin ödeme sistemine gönderilme zamanıdır.")]),e._v(" "),t("td",[e._v("NA")]),e._v(" "),t("td",[e._v("K")]),e._v(" "),t("td")])])]),e._v(" "),t("p",[t("strong",[e._v("Z: Zorunlu, K: Koşullu, İ: İsteğe Bağlı, N/A: Yok")])]),e._v(" "),t("h2",{attrs:{id:"_7-3-adim-2-odeme-isteginin-sorgulanması"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_7-3-adim-2-odeme-isteginin-sorgulanması"}},[e._v("#")]),e._v(" 7.3. ADIM 2: Ödeme İsteğinin Sorgulanması")]),e._v(" "),t("p",[t("strong",[e._v('Şekil 8 : "OdemeIste" nesnesinin sorgulanması(isteğe bağlı)')])]),e._v(" "),t("img",{attrs:{src:i(425),width:"80%"}}),e._v(" "),t("p",[t("strong",[e._v("GET /odeme-iste/{ odemeIsteRefNo }")])]),e._v(" "),t("p",[e._v("Alacaklı, ödeme isteğinin mevcut durumunu kontrol etmek için, oluşturulan bir OdemeIste kaynağının durumunu isteğe bağlı olarak alabilir.")]),e._v(" "),t("p",[t("strong",[e._v("Durum")])]),e._v(" "),t("p",[e._v("OdemeIste kaynağı için kullanılabilecek durum göstergeleri şu şekildedir:")]),e._v(" "),t("ul",[t("li",[e._v("Yanıt Bekleniyor")]),e._v(" "),t("li",[e._v("Kabul Edildi")]),e._v(" "),t("li",[e._v("Ödeme Sistemine Emir İletildi")]),e._v(" "),t("li",[e._v("İptal Edildi")])]),e._v(" "),t("h2",{attrs:{id:"_7-4-adim-3-odeme-iste-yanıtı"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_7-4-adim-3-odeme-iste-yanıtı"}},[e._v("#")]),e._v(" 7.4. ADIM 3: Ödeme İste Yanıtı")]),e._v(" "),t("p",[t("strong",[e._v("BAŞARILI İSTEK:")])]),e._v(" "),t("p",[e._v('PUT işleminin REQUEST gövdesini (BODY) oluşturan "OdemeIsteYaniti" nesnesi Tablo-9’daki parametrelerden oluşur:')]),e._v(" "),t("p",[t("strong",[e._v('Şekil 9: "OdemeIsteYaniti"')])]),e._v(" "),t("img",{attrs:{src:i(426),width:"80%"}}),e._v(" "),t("p",[t("strong",[e._v("Tablo 9: OdemeIsteYaniti Nesnesi")])]),e._v(" "),t("table",[t("thead",[t("tr",[t("th",[e._v("Alan Adı")]),e._v(" "),t("th",[e._v("Json Alan Adı")]),e._v(" "),t("th",[e._v("Format: Veri Modeli İsmi")]),e._v(" "),t("th",[e._v("Açıklama")]),e._v(" "),t("th",[e._v("İstek")])])]),e._v(" "),t("tbody",[t("tr",[t("td",[e._v("Katılımcı Bilgisi")]),e._v(" "),t("td",[e._v("katilimciBilgi")]),e._v(" "),t("td",[e._v("Kompleks:KatilimciBilgisi")]),e._v(" "),t("td",[e._v("Katılımcılara atanmış kod bilgileridir.")]),e._v(" "),t("td",[e._v("Z")])]),e._v(" "),t("tr",[t("td",[e._v("> Alacaklı ÖHS Kod")]),e._v(" "),t("td",[e._v("alacakliOhsKod")]),e._v(" "),t("td",[e._v("AN4")]),e._v(" "),t("td",[e._v("Alacaklı ÖHS’ye ait kuruluş kodu")]),e._v(" "),t("td",[e._v("Z")])]),e._v(" "),t("tr",[t("td",[e._v("> Borçlu ÖHS Kod")]),e._v(" "),t("td",[e._v("borcluOhsKod")]),e._v(" "),t("td",[e._v("AN4")]),e._v(" "),t("td",[e._v("Borçlu ÖHS’ye ait kuruluş kodu")]),e._v(" "),t("td",[e._v("Z")])]),e._v(" "),t("tr",[t("td",[e._v("Borçlu Hesap")]),e._v(" "),t("td",[e._v("borcluHesap")]),e._v(" "),t("td",[e._v("Kompleks:Hesap")]),e._v(" "),t("td",[e._v("Borçluya ait güncellenebilen  bilgilerdir.")]),e._v(" "),t("td",[e._v("Z")])]),e._v(" "),t("tr",[t("td",[e._v("> Borçlu Ad Soyad/Ticari Unvan")]),e._v(" "),t("td",[e._v("hesapSahibi")]),e._v(" "),t("td",[e._v("AN3..140")]),e._v(" "),t("td",[e._v("Borçlu müşterinin ad-soyad veya ticari ünvan bilgisidir.İşyeri için ilgili acquirer üye tarafından tahsis edilmiş olan işyeri adı bilgisidir.(Mercant Name)İşyerinin sık kullanılan adı ya da tabela ünvanı olmalıdır.Alfanumerik karakterler, '.' , '-' , '&' ve boşluk karakteri içerebilir.")]),e._v(" "),t("td",[e._v("Z")])]),e._v(" "),t("tr",[t("td",[e._v("> Borçlu IBAN")]),e._v(" "),t("td",[e._v("hesapNo")]),e._v(" "),t("td",[e._v("AN26")]),e._v(" "),t("td",[e._v("Borçlu müşteriye ait bir IBAN olmalıdır. TR ile başlamalı ve 26 karakter uzunluğunda iletilmelidir. Borçlu IBAN gönderimi zorunludur. Borçlu IBAN bilgisi borçlu müşteri tarafından değiştirilebilir.Bu sebeple istekte iletilen IBAN bilgisi alacaklı ÖHS tarafından kontrol edilmemelidir.")]),e._v(" "),t("td",[e._v("Z")])]),e._v(" "),t("tr",[t("td",[e._v("Ödeme İste Referans Numarası")]),e._v(" "),t("td",[e._v("odemeIsteRefNo")]),e._v(" "),t("td",[e._v("AN41")]),e._v(" "),t("td",[e._v("Ödeme İste sistemi numarasıdır.Alacaklı ÖHS tarafından oluşturulmalıdır. Ödeme İste Referans Numarası'nın son 6 karakteri, alacaklı ile borçlu müşteriye işlem sırasında ilgili ekranlarda gösterilmelidir.Alacaklıya Ödeme İste talebi oluşturulacağı ekranda, borçluya ise ödeme iste detayının verildiği ekranda gösterilmelidir. "),t("br"),e._v("Önerilen Format:  "),t("br"),e._v("{alacakliOhsKodu}-{guid}  "),t("br"),e._v("Örn: 8000- f534e8f2-9fbf-48cc-914b-12fbaffd8104    (size: 41)")]),e._v(" "),t("td",[e._v("Z")])]),e._v(" "),t("tr",[t("td",[e._v("Ödeme İste Durumu")]),e._v(" "),t("td",[e._v("odemeIsteDurumu")]),e._v(" "),t("td",[e._v("AN1")]),e._v(" "),t("td",[e._v('"B": borçludan yanıt bekleniyor'),t("br"),e._v('"K": borçlu kabul etti. '),t("br"),e._v('"O": ödeme sistemine emir iletildi. '),t("br"),e._v('"I": iptal.')]),e._v(" "),t("td",[e._v("Z")])]),e._v(" "),t("tr",[t("td",[e._v("Ödeme İste İptal Detay Kodu")]),e._v(" "),t("td",[e._v("odemeIsteIptalDetayKodu")]),e._v(" "),t("td",[e._v("AN2")]),e._v(" "),t("td",[e._v('"iptalDetay" : "01" borçlu ödeme isteğini red etti.B durumdayken B->I '),t("br"),e._v('"iptalDetay" : "02" borçlu beklenen sürede ödeme isteğine yanıt vermedi. B durumdayken B->I'),t("br"),e._v('"iptalDetay" : "03" borçlu iptal etti. K durumdayken K->I'),t("br"),e._v('"iptalDetay" : "04" beklenen sürede ödeme sistemine emir iletilmedi. K -> I'),t("br"),e._v('"iptalDetay" : "05" borçlu ÖHS fraud nedeniyle iptal etti. B,K -> I'),t("br"),e._v('"iptalDetay" : "11" alacaklı ödeme iste talebinden vazgeçti. B,K -> I'),t("br"),e._v(' "iptalDetay" : "12" alacaklı ÖHS fraud nedeniyle iptal etti. B,K -> I')]),e._v(" "),t("td",[e._v("K")])]),e._v(" "),t("tr",[t("td",[e._v("Borçlu Yanıt Zamanı")]),e._v(" "),t("td",[e._v("borcluYanitZamani")]),e._v(" "),t("td",[e._v("ISODateTime")]),e._v(" "),t("td",[e._v("Kabul ya da red durumunda gönderilebilecektir.")]),e._v(" "),t("td",[e._v("K")])]),e._v(" "),t("tr",[t("td",[e._v("Beklenen Ödeme Tarihi")]),e._v(" "),t("td",[e._v("beklenenOdemeTarihi")]),e._v(" "),t("td",[e._v("ISODate")]),e._v(" "),t("td",[e._v("Borçlu’nun ödemeyi taahhüt ettiği tarih bilgisidir. Sonra öde seçeneklerinde Borçlu’nun ödeme yapacağı tarih bilgisidir. Hemen öde seçeneklerinde ise Borçlu’nun kabul ettiği tarih bilgisidir.")]),e._v(" "),t("td",[e._v("K")])]),e._v(" "),t("tr",[t("td",[e._v("Ödeme Sistemi Gönderim Zamanı")]),e._v(" "),t("td",[e._v("odemeSistemineGonderimZamani")]),e._v(" "),t("td",[e._v("ISODateTime")]),e._v(" "),t("td",[e._v("Borçlu ÖHS tarafından ödemenin ödeme sistemine gönderilme zamanıdır.")]),e._v(" "),t("td",[e._v("K")])]),e._v(" "),t("tr",[t("td",[e._v("İşlem Açıklaması")]),e._v(" "),t("td",[e._v("islemAciklamasi")]),e._v(" "),t("td",[e._v("AN1..200")]),e._v(" "),t("td",[e._v("Alacaklı tarafından Borçlu'ya iletilecek Açıklama bilgisidir.Borçlu açıklamayı güncelleyebilmelidir.Borçlu Açıklama bilgisi FAST mesajına taşınacaktır.")]),e._v(" "),t("td",[e._v("İ")])])])]),e._v(" "),t("p",[t("strong",[e._v("BAŞARILI YANIT:")])]),e._v(" "),t("p",[e._v("Başarılı PUT isteği sonucu HTTP 202 Accepted ile dönülmelidir.")]),e._v(" "),t("h2",{attrs:{id:"_7-5-adim-4-odeme-iste-iptal-senaryosu"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_7-5-adim-4-odeme-iste-iptal-senaryosu"}},[e._v("#")]),e._v(" 7.5. ADIM 4: Ödeme İste İptal Senaryosu")]),e._v(" "),t("p",[t("strong",[e._v('Şekil 10: "OdemeIste" İptalinin sağlanması')])]),e._v(" "),t("img",{attrs:{src:i(427),width:"80%"}}),e._v(" "),t("p",[e._v("Ödeme iste talebi oluşturulduktan sonra bekleyen talepler Alacaklı tarafından değiştirilemez.Alacaklı, bir Öİ talebini Borçlu’ya gönderdikten sonra ödeme yapılmamış ise iptalini talep edebilir. İptal talebi, Alacaklı ÖHS tarafından Borçlu’nun bilgilendirilmesi için Borçlu ÖHS’ye Ödeme İste Sistemi kullanılarak iletilir.")]),e._v(" "),t("ul",[t("li",[e._v("Yalnızca "),t("strong",[e._v("ödemesi gerçekleşmemiş")]),e._v(" Öİ iptal edilebilir. Öİ’ye yanıt verilmiş olup olmaması iptale engel değildir.")]),e._v(" "),t("li",[e._v("Sonra Öde senaryolarında, "),t("strong",[e._v("TEÖZ’e kadar")]),e._v(" ödemesi gerçekleşmemiş Öİ için iptal talebi gönderilebilir.")]),e._v(" "),t("li",[e._v("Hemen Öde senaryolarında, "),t("strong",[e._v("SGZ’ye kadar")]),e._v(" ödemesi gerçekleşmemiş Öİ için iptal talebi gönderilebilir.")]),e._v(" "),t("li",[e._v("Alacaklı ÖHS, iptal talebini Borçlu ÖHS’ye iletmeden önce ilişkili Öİ’nin durumunu kontrol etmelidir. Örneğin, Öİ’nin daha önce reddedilmediğini, SGZ’nin geçmediğini vb.")]),e._v(" "),t("li",[e._v("Katılımcılar gerekli durumlarda teknik hata ya da dolandırıcılık şüphesi gibi nedenlerle Öİ iptal talebi gönderebilir.")]),e._v(" "),t("li",[e._v("Alacaklı ÖHS, iptal talebini başarıyla ilettiği Öİ talebine karşılık oluşturulmuş bir ödeme işlemi varsa bu ödemeyi reddeder.")]),e._v(" "),t("li",[e._v("Borçlu ÖHS, gelen iptal talebine ilişkin Borçlu’yu bilgilendirmelidir.")])]),e._v(" "),t("h2",{attrs:{id:"_7-6-odeme-iste-sistem-olay-dinleme"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_7-6-odeme-iste-sistem-olay-dinleme"}},[e._v("#")]),e._v(" 7.6. Ödeme İste Sistem Olay Dinleme")]),e._v(" "),t("p",[e._v("POST /sistem-olay-dinleme")]),e._v(" "),t("p",[e._v("ÖHS'lerin sistem olaylarını dinleme amacıyla açması gereken endpoint bilgisidir.")]),e._v(" "),t("p",[e._v("OHS API içerisinde yapılan değişikliklerde, BKM tarafından ÖHS'lere olay bildirimleri yapılır.")]),e._v(" "),t("p",[e._v("Olaylar yanıt nesnesi içerisinde 1 adet kayıt yer alacaktır.")]),e._v(" "),t("p",[e._v("Başarılı POST isteği sonucu HTTP 202 Accepted kodu ile dönülmelidir.")]),e._v(" "),t("p",[e._v("ÖHS'den başarılı yanıt alınamadığı durumda, 5 dakika aralıklarla 3 kez deneme yapılacaktır. Hata alınmaya devam edilmesi durumunda başka bir aksiyon alınmayacaktır.")]),e._v(" "),t("p",[t("strong",[e._v("Tablo 10: Olay Nesnesi")])]),e._v(" "),t("table",[t("thead",[t("tr",[t("th",[e._v("Alan Adı")]),e._v(" "),t("th",[e._v("Json Alan Adı")]),e._v(" "),t("th",[e._v("Format: Veri Modeli İsmi")]),e._v(" "),t("th",[e._v("Açıklama")]),e._v(" "),t("th",[e._v("İstek")])])]),e._v(" "),t("tbody",[t("tr",[t("td",[e._v("Olay Numarası")]),e._v(" "),t("td",[e._v("olayNo")]),e._v(" "),t("td",[e._v("AN1..64")]),e._v(" "),t("td",[e._v("Z")]),e._v(" "),t("td",[e._v("Olaya ait atanmış tekil kimlik numarası")])]),e._v(" "),t("tr",[t("td",[e._v("Olay Zamanı")]),e._v(" "),t("td",[e._v("olayZamani")]),e._v(" "),t("td",[e._v("ISODateTime")]),e._v(" "),t("td",[e._v("Z")]),e._v(" "),t("td",[e._v("Olayın oluşma zamanı")])]),e._v(" "),t("tr",[t("td",[e._v("Olay Tipi")]),e._v(" "),t("td",[e._v("olayTipi")]),e._v(" "),t("td",[e._v("AN1..36")]),e._v(" "),t("td",[e._v("Z")]),e._v(" "),t("td",[e._v("TR.OIS.DataCode.OlayTip sıralı veri tiplerinden birini alır.")])]),e._v(" "),t("tr",[t("td",[e._v("Kaynak Tipi")]),e._v(" "),t("td",[e._v("kaynakTipi")]),e._v(" "),t("td",[e._v("AN1..36")]),e._v(" "),t("td",[e._v("Z")]),e._v(" "),t("td",[e._v("TR.OIS.DataCode.KaynakTip sıralı veri tiplerinden birini alır.")])]),e._v(" "),t("tr",[t("td",[e._v("Kaynak Numarası")]),e._v(" "),t("td",[e._v("kaynakNo")]),e._v(" "),t("td",[e._v("AN1..128")]),e._v(" "),t("td",[e._v("Z")]),e._v(" "),t("td",[e._v("Güncellenen kaynağa ait OHS sistemindeki tekil tanımlayıcı.")])])])])])}),[],!1,null,null,null);a.default=v.exports}}]);