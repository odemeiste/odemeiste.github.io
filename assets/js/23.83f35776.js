(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{456:function(a,e,i){"use strict";i.r(e);var l=i(62),r=Object(l.a)({},(function(){var a=this,e=a.$createElement,i=a._self._c||e;return i("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[i("h1",{attrs:{id:"_3-temel-prensipler"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#_3-temel-prensipler"}},[a._v("#")]),a._v(" 3. Temel Prensipler ")]),a._v(" "),i("p",[a._v("Temel prensipler ile ilgili belirlenen kurallar 'Aktif Sürüm' içerisinde yer alan 'Temel Prensipler' ile aynıdır. Detaylı bilgi için "),i("strong",[a._v("'Aktif Sürüm'")]),a._v(" kontrol edilmelidir.")]),a._v(" "),i("p",[a._v("Bu bölümde sadece Öİ Kurumsal API ile ilgili farklılaşan kısımlar anlatılmaktadır.")]),a._v(" "),i("h2",{attrs:{id:"_3-1-genel-ilkeler"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-genel-ilkeler"}},[a._v("#")]),a._v(" 3.1. Genel İlkeler")]),a._v(" "),i("ul",[i("li",[i("p",[a._v("Öİ hizmetinin alacaklı ÖHS tarafından API ile bir işyerine/kuruma vb. açılması için alacaklı ÖHS ile ilgili işyeri arasında sözleşme imzalanması( işyeri sözleşmesi, Kurum ile ÖHS arası sözleşme vb.) şartı olacaktır. Yapılan sözleşme işyeri ve alacaklı ÖHS arasında yapılacak olup BKM sorumluluğu dışındadır.")])]),a._v(" "),i("li",[i("p",[a._v("Tüm alacaklı ÖHS’lerin işyerlerine aynı formatta token endpointi açması zorunludur. İstek başlığında yer alan ‘Authorization’ kısmı için aşağıdaki hususlara dikkat edilmelidir.")]),a._v(" "),i("ul",[i("li",[i("p",[i("strong",[a._v("Authorization;")]),a._v(" işyeri ile alacaklı ÖHS arasındaki otorizasyon için kullanılan token bilgisidir. Alacaklı ÖHS’nin açtığı endpointden alınan token bu başlıkta gönderilecektir.")])]),a._v(" "),i("li",[i("p",[a._v("ÖHS'nin işyerine sunacağı Öİ Kurumsal API’ye ait alan adı ile aynı olmalıdır.")])]),a._v(" "),i("li",[i("p",[a._v("Verilecek tokenın yaşam süresi en az 1 saat olmalıdır.")])]),a._v(" "),i("li",[i("p",[a._v("Scope olarak “odeme_iste_kurumsal” kullanılmalıdır.")])]),a._v(" "),i("li",[i("p",[a._v("Token endpoint’e atılacak örnek İstek :")]),a._v(" "),i("div",{staticClass:"language- extra-class"},[i("pre",[i("code",[a._v("  curl --location 'https://……...com.tr/oauth-provider/oauth2/token' \\\n  --header 'Content-Type: application/x-www-form-urlencoded' \\\n  --data-urlencode 'grant_type=client_credentials' \\\n  --data-urlencode 'scope=odeme_iste_kurumsal' \\\n  --data-urlencode 'client_id=**********' \\                  \n  --data-urlencode 'client_secret=***********'  \n")])])])]),a._v(" "),i("li",[i("p",[i("strong",[a._v("Client ID:")]),a._v(" ÖHS tarafından işyerine atanmış olan ; Token alınması için gerekli clientID bilgisidir.")])]),a._v(" "),i("li",[i("p",[i("strong",[a._v("Client Secret:")]),a._v(" ÖHS tarafından işyerine atanmış olan; Token alınması için gerekli clientSecret bilgisidir.")])])])])]),a._v(" "),i("h2",{attrs:{id:"_3-2-mesaj-imzalama"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-mesaj-imzalama"}},[a._v("#")]),a._v(" 3.2. Mesaj İmzalama")]),a._v(" "),i("p",[a._v("Dijital imzalama yapısı, Ödeme İste Kurumsal API’de gerçekleştirilen işlemlerin ve taşınan verilerin bütünlük ve inkâr edilemezliğini sağlamak amacıyla kurgulanmıştır. İmzaların kaynak bazında hangi istek ve yanıtlara uygulandığı belirlidir.")]),a._v(" "),i("p",[a._v("API yalnızca TLS'ye dayanırsa, dijital kayıtları ve inkâr edilemezlik kanıtlarını tutmak zor olur. Bu nedenle, TLS'ye dayanmayan bir inkâr edilemezlik çözümü olarak API isteğinin HTTP başlığında bir JWS kullanılarak sağlanabilir.")]),a._v(" "),i("p",[a._v("HTTP isteğinin gövdesinin hash fonksiyonu (SHA256) ile özeti alınacaktır. Elde edilen özet, asimetrik anahtarları destekleyen bir algoritma kullanılarak imzalanacak ve JWS elde edilecektir. İsteğin kendinize geldiği durumda body üzerinde hiç bir değişikliğe tabi tutmadan (serialize/deserialize, minify, trim, vb yapmadan) doğrulama yapmanız gerekmektedir. Aynı şekilde isteğin kendinizden çıktığı aşamada da response body üzerinde hiç bir değişikliğe tabi tutmadan (serialize/deserialize, minify, trim, vb yapmadan) mesaj imzalama yapılmalıdır.")]),a._v(" "),i("p",[a._v("Bu kapsamda imzalama akışı aşağıdaki gibi olmalıdır:")]),a._v(" "),i("ul",[i("li",[a._v("İşyeri öncelikle özel ve açık anahtarlarını oluşturmalıdır. İşyeri'nin açık anahtar bilgisi, alacaklı ÖHS ile bir kereye mahsus güvenli bir şekilde paylaşılmalıdır. Bu anahtarları oluşturmak için aşağıda “openssl” kullanılarak oluşturma örneği paylaşılmıştır. Bu anahtarlardan özel olan anahtar mesajı imzalamak için kullanılacak olup, açık anahtar ise mesajı doğrulamak amacıyla mesajın alıcısı tarafından kullanılacaktır.")])]),a._v(" "),i("p",[a._v("Özel anahtarın oluşturulması. private.pem => Özel anahtar "),i("br"),a._v(" "),i("strong",[i("code",[a._v("openssl genrsa -out private.pem 2048")])]),i("br"),i("br")]),a._v(" "),i("p",[a._v("Özel anahtardan açık anahtarın oluşturulması. public_key.pem => Açık anahtar (Alacaklı ÖHS ile paylaşılacak açık anahtar)"),i("br"),a._v(" "),i("strong",[i("code",[a._v("openssl rsa -in private.pem -pubout -outform PEM -out public_key.pem")])]),i("br"),i("br")]),a._v(" "),i("p",[a._v("Opsiyonel olarak özel anahtarın PCKS8 formatına çevrilmesi (Java açısından PCKS8 formatında olma ihtiyacı nedeniyle). private_key.pem => Özel anahtarın formatlanmış hali. "),i("br"),a._v(" "),i("strong",[i("code",[a._v("openssl pkcs8 -topk8 -inform PEM -in private.pem -out private_key.pem –nocrypt")])]),i("br"),i("br")]),a._v(" "),i("p",[i("strong",[a._v("Açık ve Özel anahtarlar oluşturulduktan sonra Açık Anahtar Alacaklı ÖHS ile paylaşılır. Alacaklı ÖHS bu açık anahtarı mesaj doğrulamada kullanmak için bir Anahtar Deposu yaklaşımı ile bünyesinde tutar.")])]),a._v(" "),i("p",[a._v("İstek mesajının doğrulanması; İmzalı mesajı açacak olan alacaklı ÖHS mesajı imzalayan işyerinin açık anahtarını kullanarak mesajı doğrular. İlgili mesaj doğrulama hatalı ise isteği "),i("strong",[a._v("TR.OIS.Resource.InvalidSignature")]),a._v(" hatası döner.")]),a._v(" "),i("p",[a._v("Yanıt mesajının doğrulanması; işyeri tarafından yanıt mesajı içerisinde yer alan imzanın doğrulanması aşamasında hata alınması durumunda işleme devam edilmemeli ilgili ödeme iste talebi iptal edilmelidir.")]),a._v(" "),i("p",[i("strong",[a._v("İmzalama Kuralları (İsteği Başlatan İşyeri)")])]),a._v(" "),i("p",[a._v("İşyeri üzerinden başlayan akış örnek olarak paylaşılmıştır.")]),a._v(" "),i("ul",[i("li",[a._v("İsteği başlatan işyeri, mesaj imzalama gerektiren her API isteğinin HTTP gövdesini (request body) kendi özel anahtarı ile şifreleyerek imza bilgisini oluşturur.")]),a._v(" "),i("li",[a._v("Ardından bu imza verisini, göndereceği mesajın istek başlığında yer alan X-JWS-Signature alanında göndermelidir.")]),a._v(" "),i("li",[a._v("X-JWS-Signature alanında gönderilecek olan bilgi aşağıdaki yöntem ile oluşturulmalıdır.\n"),i("ol",[i("li",[a._v("Bu alana yazılacak olan bilgi JWT formatında oluşturulmalıdır.")]),a._v(" "),i("li",[a._v("Bir JWT, header-payload-signature alanlarından oluşmaktadır.")])]),a._v(" "),i("ul",[i("li",[i("p",[a._v("Header alanında JWT’yi imzalamak için kullanılacak algoritma belirtilmelidir. Standartlar kapsamında RS256 kullanılacaktır.")])]),a._v(" "),i("li",[i("p",[a._v("Payload kısmında özel olarak oluşturulacak olan “body” claim alanına istek gövdesi (request body) verisinin SHA256 hash değeri karşılığı yazılmalıdır.")])]),a._v(" "),i("li",[i("p",[a._v('JSON payload oluşturulurken RFC 7519 baz alınmalıdır. "iss" (Issuer) Claim, "exp" (Expiration Time) Claim, "iat" (Issued At) Claim, “body” Claim alanlarının gönderilmesi zorunludur.^RFC7519(opens new window)')]),a._v(" "),i("p",[a._v('a. "iss" (Issuer) Claim : Kurumunuza özel bilgidir. Örnek olarak fqdn bilginiz olabilir. https://xisyeri.com.tr')]),a._v(" "),i("p",[a._v('b. "exp" (Expiration Time) Claim: Saniye cinsinden (Unix time) imzanın son geçerli olduğu tarih. Bu tarih mevcut sunucu saatinizden 60 dakika sonra olacak şekilde kullanılmalıdır.')]),a._v(" "),i("p",[a._v('c. "iat" (Issued At) Claim : Saniye cinsinden (Unix time) imzanın oluşturulduğu tarih. Bu tarih mevcut sunucu saatinizden 5 dakika önce olacak şekilde kullanılmalıdır.')]),a._v(" "),i("p",[a._v("d. “body” Claim : istek gövdesi (request body) verisinin SHA256 hash değeri karşılığı.")])]),a._v(" "),i("li",[i("p",[a._v("Signature alanında da özel anahtar ile imzalanmış olan imza içeriği yer alacaktır.")])])])])]),a._v(" "),i("p",[i("strong",[a._v("X-JWS-Signature")]),a._v(": JWS imzasını içeren istek başlığı. Bu başlığın ne zaman belirtilmesi gerektiği hususu ilgili endpoint için belirtilmiştir.")]),a._v(" "),i("p",[i("strong",[a._v("Örnek X-JWS-Signature Payload Değeri")])]),a._v(" "),i("p",[i("code",[a._v('{"iss": "https://xbank.com.tr","exp": 1646832405,"iat": 1646746005,"body": "c543072f97a761a1d891dc81acc380bc1e6f61ca6541bd93ebfdece338457922"}')])]),a._v(" "),i("ul",[i("li",[i("p",[a._v("İstek gönderilir. Sadece mesajın bütünlüğünü ve doğruluğunu teyit amacı ile istek gövdesi (request body) SHA256 hash değeri imzalanarak X-JWS-Signature alanında bu imza iletilir. İsteğin gövde (request body) kısmı açık ve şifresiz olarak gönderilmektedir.")])]),a._v(" "),i("li",[i("p",[a._v("İsteği alan Alacaklı ÖHS, talebi gerçekleştirmeden önce aldığı API isteklerinin imzasını doğrulamalıdır. X-JWS-Signature alanındaki JWT aşağıdaki adımlarla doğrulanmalıdır.")]),a._v(" "),i("ol",[i("li",[a._v("Header kısmındaki algoritmanin RS256 olduğu kontrol edilir.")]),a._v(" "),i("li",[a._v("Gönderen katılımcının açık anahtarı ile JWT verify (doğrulama) işlemi yapılır.")]),a._v(" "),i("li",[a._v("Yukarıdaki işlemlerin doğruluğunun ardından JWT’nin payload kısmındaki “body” claim alanındaki bilginin, isteğin gövde verisinin SHA256 hash değerlerinin aynı olduğu kontrol edilir.")]),a._v(" "),i("li",[a._v("Örnek checksum değeri "),i("br"),a._v('\n"a64b19f95eeb1fb0a0a3e2dbbc6e3d8472c52184d4543417ddc6d156fc5c5571" veya '),i("br"),a._v('\n"A64B19F95EEB1FB0A0A3E2DBBC6E3D8472C52184D4543417DDC6D156FC5C5571" şeklinde olabilir. İki hali de aynı değere sahiptir.     Kontrollerde buna dikkat edilmesi gerekmektedir.')])])]),a._v(" "),i("li",[i("p",[a._v("Yukarıdaki işlemler ile doğruluğu teyit edilmiş olan isteğin talebi gerçekleştirir.")])]),a._v(" "),i("li",[i("p",[a._v("Eğer istek doğrulanamıyor ise işyerinin açık ve özel anahtar çifti yenilenmiş olabilir. Bu durumda Alacaklı ÖHS, işyerine ait açık anahtarın doğruluğunu kontrol eder.")])]),a._v(" "),i("li",[i("p",[a._v("Ardından imzayı tekrar açık anahtar ile doğrulayarak kontroller gerçekleştirilir. (Eğer halen doğrulama işlemi başarısız ise bu istek için hata akışı çalıştırılır. "),i("strong",[a._v("TR.OIS.Resource.InvalidSignature")]),a._v(" kodu ile hata üretilebilir.)")])]),a._v(" "),i("li",[i("p",[a._v("İmza bilgisinin beklendiği (x-jws-signature) servislerde, bu bilginin iletilmediği durumlarda "),i("strong",[a._v("TR.OIS.Resource.MissingSignature")]),a._v(" hatası üretilebilir.")])]),a._v(" "),i("li",[i("p",[a._v("İsteği alan Alacaklı ÖHS; isteği işledikten sonra cevabı oluştururken de yukarıdaki akışlar ile göndereceği cevabı imzalamalıdır.")])]),a._v(" "),i("li",[i("p",[a._v('İstek yanıt gövdesinin SHA256 checksum değeri için hexadecimal çıktı kullanılacaktır. Oluşacak çıktının 64 karakter olması beklenmektedir. Kontrol için "^[A-Fa-f0-9]{64}$" RegEx tarifini kullanabilirsiniz.')])])]),a._v(" "),i("p",[i("strong",[a._v("Anahtar Deposu")])]),a._v(" "),i("p",[a._v("ÖHS'ler tarafından güvenilen bir Güven Otoritesi (Trust Anchor), taraflar için bir genel anahtar deposu sağlamaktan sorumludur.\nGüven Otoritesi, taraflardan herhangi birisinin oluşturduğu bir anahtar çiftinin açık bölümünü saklayan merkezi bir dizin olacaktır.")]),a._v(" "),i("h2",{attrs:{id:"_3-3-gereksinimlerinin-sınıflandırılması"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#_3-3-gereksinimlerinin-sınıflandırılması"}},[a._v("#")]),a._v(" 3.3. Gereksinimlerinin Sınıflandırılması")]),a._v(" "),i("p",[a._v("Erişim adreslerinin ve alanların kullanımı Zorunlu(Z), İsteğe Bağlı(İ), Koşullu(K), Yok(N/A) olabilir. Kullanımlara ilişkin durumlar ve kullanımın (K) koşullu olduğu duruma ilişkin açıklamalar ilgili tablolarda belirtilmiştir.")]),a._v(" "),i("p",[a._v('Öİ API\'lerinin istek ve yanıtta kullanılacak başlık isimleri, ilgili RFC dokümanlarında ve aşağıdaki tabloda yer aldığı şekilde kullanılacaktır. Uygulamaya özelleşmiş başlıklar "X-" ile başlayacaktır. Başlık isimlerinde yer alacak kısaltmalar tamamı büyük harfle yazılacak şekilde tanımlanacaktır. Başlık isimleri büyük – küçük harfe duyarlı olmamalıdır. Örneğin x-request-id ya da X-Request-ID olarak gönderilmiş olan bir istek başlığı değişkeni, sunucu tarafında hata vermeyecek şekilde işlenebilmelidir.')]),a._v(" "),i("p",[i("strong",[a._v("'Aktif Sürüm'")]),a._v(" -> "),i("strong",[a._v("'Temel Prensipler'")]),a._v(" -> "),i("strong",[a._v("'Gereksinimlerinin Sınıflandırılması'")]),a._v(" menüsünden detaylı bilgiye erişebilirsiniz.")]),a._v(" "),i("h2",{attrs:{id:"_3-5-istek-baslıgı"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#_3-5-istek-baslıgı"}},[a._v("#")]),a._v(" 3.5. İstek Başlığı")]),a._v(" "),i("ul",[i("li",[a._v('"Başlık isimleri" yorumlanırken küçük büyük harfe duyarlı olmamalıdır. Örneğin "x-ReQuEsT-Id" geçerli bir başlık ismidir.')]),a._v(" "),i("li",[a._v('"Başlık değerleri" yorumlanırken ise küçük büyük harf duyarlılığı olmalıdır. Örneğin "xyz123" ile "XYZ123" değerleri farklıdır.')]),a._v(" "),i("li",[a._v('Başlık değerlerinde ISO-8859-1 standartında yer alan karakter kümesi kullanılmalıdır. Örneğin "X-Request-Id" değerinde "İOS12" yazmak, büyük "İ" harfinin ISO-8859-1 içerisinde yer almamasından dolayı, hataya yol açacaktır.')]),a._v(" "),i("li",[a._v("İstek ve Yanıt başlığında yer alan alanların; POST GET PUT metotlarında, Zorunlu/Koşullu/İsteğe Bağlı/Yok kullanım durumları aşağıdaki tabloda listelenmiştir.")])]),a._v(" "),i("p",[i("strong",[a._v("İstek Başlığında Yer Alan Veriler")])]),a._v(" "),i("table",[i("thead",[i("tr",[i("th",[a._v("Başlık İsimleri")]),a._v(" "),i("th",[a._v("Format")]),a._v(" "),i("th",[a._v("Notlar")]),a._v(" "),i("th",[a._v("POST")]),a._v(" "),i("th",[a._v("GET")]),a._v(" "),i("th",[a._v("PUT")])])]),a._v(" "),i("tbody",[i("tr",[i("td",[a._v("X-Request-ID")]),a._v(" "),i("td",[a._v("AN1..36")]),a._v(" "),i("td",[a._v("İsteği başlatan işyeri tarafından belirlenen çağrıya özgü talep kimliği. İstek numarası. "),i("br"),a._v(" Örnek: Ödeme iste talebi iş akışının her adımında farklı “x-request-id” değeri kullanılır. "),i("br"),a._v(" Çağrıların aynı yanıtı dönmesinin beklendiği durumlarda (idempotent işlemlerde) aynı değer ile çağrı yapılır.")]),a._v(" "),i("td",[a._v("Z")]),a._v(" "),i("td",[a._v("Z")]),a._v(" "),i("td",[a._v("Z")])]),a._v(" "),i("tr",[i("td",[a._v("Content-Type")]),a._v(" "),i("td",[a._v("AN1..20")]),a._v(" "),i("td",[a._v("Standart HTTP Başlığı; Talepte sağlanan payload’ın biçimini temsil eder. Bu değerin application/json olarak gönderilmesi gerekmektedir. Hata durumlarında application/problem+json da iletilebilir."),i("br"),a._v(" (Başka bir değere ayarlanırsa, ÖHS, 415 Desteklenmeyen Ortam Türü (Unsupported Media Type) ile yanıt vermelidir)")]),a._v(" "),i("td",[a._v("Z")]),a._v(" "),i("td",[a._v("-")]),a._v(" "),i("td",[a._v("Z")])]),a._v(" "),i("tr",[i("td",[a._v("X-Merchant-ID")]),a._v(" "),i("td",[a._v("AN1..36")]),a._v(" "),i("td",[a._v("Alacaklı ÖHS tarafından işyerine tahsis edilen tekil kimlik bilgisidir. İstek gövdesindeki isyeriKodu ile aynı değer olmalıdır.")]),a._v(" "),i("td",[a._v("Z")]),a._v(" "),i("td",[a._v("Z")]),a._v(" "),i("td",[a._v("Z")])]),a._v(" "),i("tr",[i("td",[a._v("X-Sub-Merchant-ID")]),a._v(" "),i("td",[a._v("AN1..36")]),a._v(" "),i("td",[a._v("Alacaklı ÖHS tarafından alt işyerine tahsis edilen tekil kimlik bilgisidir. İstek gövdesindeki altIsyeriKodu ile aynı değer olmalıdır.")]),a._v(" "),i("td",[a._v("İ")]),a._v(" "),i("td",[a._v("İ")]),a._v(" "),i("td",[a._v("İ")])]),a._v(" "),i("tr",[i("td",[a._v("Authorization")]),a._v(" "),i("td",[a._v("AN1..4096")]),a._v(" "),i("td",[a._v("İsteği başlatan işyeri tarafından doldurulması gerekli token bilgisidir.")]),a._v(" "),i("td",[a._v("Z")]),a._v(" "),i("td",[a._v("Z")]),a._v(" "),i("td",[a._v("Z")])]),a._v(" "),i("tr",[i("td",[a._v("X-JWS-Signature")]),a._v(" "),i("td",[a._v("AN1..4096")]),a._v(" "),i("td",[a._v("HTTP isteğinin gövdesinin hash fonksiyonu (SHA256) ile özeti alınacaktır. Elde edilen özet, asimetrik anahtarları destekleyen bir algoritma kullanılarak imzalanacak ve JWS elde edilecektir.Bu başlığın ne zaman belirtilmesi gerektiği hususu ilgili endpoint için imzalama türü başlığında İmzalı İstek olarak belirtilmiştir.")]),a._v(" "),i("td",[a._v("Z")]),a._v(" "),i("td",[a._v("-")]),a._v(" "),i("td",[a._v("Z")])])])]),a._v(" "),i("h2",{attrs:{id:"_3-6-yanıt-baslıgı"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#_3-6-yanıt-baslıgı"}},[a._v("#")]),a._v(" 3.6. Yanıt Başlığı")]),a._v(" "),i("ul",[i("li",[a._v('"Başlık isimleri" yorumlanırken küçük büyük harfe duyarlı olmamalıdır. Örneğin "x-ReQuEsT-Id" geçerli bir başlık ismidir.')]),a._v(" "),i("li",[a._v('"Başlık değerleri" yorumlanırken ise küçük büyük harf duyarlılığı olmalıdır. Örneğin "xyz123" ile "XYZ123" değerleri farklıdır.')]),a._v(" "),i("li",[a._v('Başlık değerlerinde ISO-8859-1 standartında yer alan karakter kümesi kullanılmalıdır. Örneğin "X-Request-Id" değerinde "İOS12"'),i("br"),a._v('\nyazmak, büyük "İ" harfinin ISO-8859-1 içerisinde yer almamasından dolayı, hataya yol açacaktır.')])]),a._v(" "),i("p",[i("strong",[a._v("Yanıt Başlığında Yer Alan Veriler")])]),a._v(" "),i("table",[i("thead",[i("tr",[i("th",[a._v("Başlık İsimleri")]),a._v(" "),i("th",[a._v("Format")]),a._v(" "),i("th",[a._v("Notlar")]),a._v(" "),i("th",[a._v("POST")]),a._v(" "),i("th",[a._v("GET")]),a._v(" "),i("th",[a._v("PUT")])])]),a._v(" "),i("tbody",[i("tr",[i("td",[a._v("X-Request-ID")]),a._v(" "),i("td",[a._v("AN1..36")]),a._v(" "),i("td",[a._v("İsteği başlatan işyeri tarafından belirlenen çağrıya özgü talep kimliği. İstek numarası. "),i("br"),a._v(" Örnek: Ödeme iste talebi iş akışının her adımında farklı “x-request-id” değeri kullanılır. "),i("br"),a._v(" Çağrıların aynı yanıtı dönmesinin beklendiği durumlarda (idempotent işlemlerde) aynı değer ile çağrı yapılır. "),i("br"),a._v(" "),i("strong",[a._v("İlgili istek başlığındaki bilgi geri dönülür.")])]),a._v(" "),i("td",[a._v("Z")]),a._v(" "),i("td",[a._v("Z")]),a._v(" "),i("td",[a._v("Z")])]),a._v(" "),i("tr",[i("td",[a._v("Content-Type")]),a._v(" "),i("td",[a._v("AN1..20")]),a._v(" "),i("td",[a._v("Standart HTTP Başlığı; Talepte sağlanan payload’ın biçimini temsil eder. Bu değerin application/json olarak gönderilmesi gerekmektedir. Hata durumlarında application/problem+json da iletilebilir."),i("br"),a._v(" (Başka bir değere ayarlanırsa, ÖHS, 415 Desteklenmeyen Ortam Türü (Unsupported Media Type) ile yanıt vermelidir)")]),a._v(" "),i("td",[a._v("Z")]),a._v(" "),i("td",[a._v("-")]),a._v(" "),i("td",[a._v("Z")])]),a._v(" "),i("tr",[i("td",[a._v("X-Merchant-ID")]),a._v(" "),i("td",[a._v("AN1..36")]),a._v(" "),i("td",[i("br"),a._v(" "),i("strong",[a._v("İlgili istek başlığındaki bilgi geri dönülür.")])]),a._v(" "),i("td",[a._v("Z")]),a._v(" "),i("td",[a._v("Z")]),a._v(" "),i("td",[a._v("Z")])]),a._v(" "),i("tr",[i("td",[a._v("X-Sub-Merchant-ID")]),a._v(" "),i("td",[a._v("AN1..36")]),a._v(" "),i("td",[i("br"),a._v(" "),i("strong",[a._v("İlgili istek başlığındaki bilgi geri dönülür.")])]),a._v(" "),i("td",[a._v("İ")]),a._v(" "),i("td",[a._v("İ")]),a._v(" "),i("td",[a._v("İ")])]),a._v(" "),i("tr",[i("td",[a._v("X-JWS-Signature")]),a._v(" "),i("td",[a._v("AN1..4096")]),a._v(" "),i("td",[a._v("HTTP yanıtının gövdesinin hash fonksiyonu (SHA256) ile özeti alınacaktır. Elde edilen özet, asimetrik anahtarları destekleyen bir algoritma kullanılarak imzalanacak ve JWS elde edilecektir.Bu başlığın ne zaman belirtilmesi gerektiği hususu ilgili endpoint için imzalama türü başlığında İmzalı Yanıt olarak belirtilmiştir.")]),a._v(" "),i("td",[a._v("Z")]),a._v(" "),i("td",[a._v("Z")]),a._v(" "),i("td",[a._v("Z")])])])]),a._v(" "),i("h2",{attrs:{id:"_3-7-http-durum-kodları"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#_3-7-http-durum-kodları"}},[a._v("#")]),a._v(" 3.7. HTTP Durum Kodları")]),a._v(" "),i("p",[a._v("RFC 2616'da belirlenmiş olan durum kodları (status code) gönderilen isteğin durumunu  standart bir şekilde ifade eder. Eğer bir hata varsa hatayı, gönderilen istek başarılı bir şekilde işlem gördüyse ona ilişkin durumu aktarır. Durum kodları genel olarak 5 kategoridedir.")]),a._v(" "),i("ul",[i("li",[a._v("1xx Bilgi")]),a._v(" "),i("li",[a._v("2xx Başarılı")]),a._v(" "),i("li",[a._v("3xx Yönlendirme")]),a._v(" "),i("li",[a._v("4xx İstemci Hatası")]),a._v(" "),i("li",[a._v("5xx Sunucu Hatası")])]),a._v(" "),i("p",[i("strong",[a._v("'Aktif Sürüm'")]),a._v(" -> "),i("strong",[a._v("'Temel Prensipler'")]),a._v(" -> "),i("strong",[a._v("'HTTP Durum Kodları'")]),a._v(" menüsünden detaylı bilgiye erişebilirsiniz.")]),a._v(" "),i("h2",{attrs:{id:"_3-17-sıralı-veri-turleri"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#_3-17-sıralı-veri-turleri"}},[a._v("#")]),a._v(" 3.17. Sıralı Veri Türleri")]),a._v(" "),i("p",[i("strong",[a._v("Tablo 6: Sıralı Veri Türleri")])]),a._v(" "),i("table",[i("thead",[i("tr",[i("th",[i("strong",[a._v("Kod")])]),a._v(" "),i("th",[i("strong",[a._v("Açıklama")])])])]),a._v(" "),i("tbody",[i("tr",[i("td",[a._v("TR.OIS.DataCode.MusteriTip")]),a._v(" "),i("td",[a._v("B: Bireysel "),i("br"),a._v("K: Kurumsal")])]),a._v(" "),i("tr",[i("td",[a._v("TR.OIS.DataCode.KimlikTur")]),a._v(" "),i("td",[a._v("Kod, Tip, Format "),i("br"),a._v("K , TCKN , N11 "),i("br"),a._v("V, VKN, AN10 "),i("br"),a._v("Y , YKN , N11 "),i("br"),a._v("P , PNO , AN7..9")])]),a._v(" "),i("tr",[i("td",[a._v("TR.OIS.DataCode.OdemeAmaci")]),a._v(" "),i("td",[a._v("Ödemenin Amacına yönelik olarak aşağıdaki değerlerden birini alır:"),i("br"),a._v("01: Konut Kirası Ödemesi"),i("br"),a._v("02: İş yeri Kirası Ödemesi"),i("br"),a._v("03: Diğer Kira Ödemesi"),i("br"),a._v("04: E-Ticaret Ödemesi: Elektronik ticaret işlem amaçlı aktarımlar"),i("br"),a._v("05: Çalışan Ödemesi: Maaş, harcırah, prim gibi çalışan ödemeleri"),i("br"),a._v("06: Ticari ödeme: Ticari işletmelerin birbirlerine, kendi hesaplarına veya müşterilerine ödemeleri, borç, ithalat, ihracat, şirket satın alma, vb. kapsamında ödemeler"),i("br"),a._v("07: Bireysel Ödeme: Özel amaçlı (aile bireylerine, hediye, bağış, borç, alışveriş vs.) ödemeler"),i("br"),a._v("08: Yatırım: Mevduat, menkul kıymet, döviz, gayrı menkul, taşıt, varlık alımı, temettü ödeme, tahsilat vb. gibi yatırım amaçlı ödemeler"),i("br"),a._v("09: Finansal: Kredi, depo, repo, türev, finansal varlık alım/satımı vb. ödemeler"),i("br"),a._v("10: Eğitim ödemesi"),i("br"),a._v("11: Aidat ödemesi"),i("br"),a._v('12: Diğer (Diğer seçeneği ÖHS "Havale" süreçleri için eklenmiştir. FAST işlemlerinde "Diğer" ödeme amacı kullanılmamalıdır.)')])]),a._v(" "),i("tr",[i("td",[a._v("TR.OIS.DataCode.AkisTur")]),a._v(" "),i("td",[a._v("01: Kişiden Kişiye Ödemeler "),i("br"),a._v("02: İşyeri Ödemesi")])]),a._v(" "),i("tr",[i("td",[a._v("TR.OIS.DataCode.OdemeIsteDurumu")]),a._v(" "),i("td",[a._v("A: Alacaklı ÖHS'de talep oluşturuldu "),i("br"),a._v(" B: Yanıt Bekleniyor"),i("br"),a._v("K: Kabul Edildi"),i("br"),a._v("G: Ödeme Sistemine İletildi"),i("br"),a._v("O: Ödeme Gerçekleşti"),i("br"),a._v(" I: İptal Edildi")])]),a._v(" "),i("tr",[i("td",[a._v("TR.OIS.DataCode.OdemeIsteIptDtyKod")]),a._v(" "),i("td",[a._v("'01': Borçlu Müşteri Ödeme İsteğini Reddetti"),i("br"),a._v("'02': Borçlu Müşteri Beklenen Sürede Ödeme İsteğine Yanıt Vermedi"),i("br"),a._v("'03': Borçlu ÖHS Fraud Nedeniyle İptal Etti"),i("br"),a._v("'04': Borçlu ÖHS Ödeme Sistemine İletemedi"),i("br"),a._v("'05': Borçlu ÖHS Ödeme İste Yanıt’ını Alacaklı ÖHS’ye İletemedi"),i("br"),a._v("'11': Alacaklı Müşteri Ödeme İste Talebinden Vazgeçti"),i("br"),a._v("'12': Alacaklı ÖHS Fraud Nedeniyle İptal Etti"),i("br"),a._v("'13':  Alacaklı ÖHS Ödeme İste Değerleri Uyuşmaması Nedeniyle İptal Etti"),i("br"),a._v("'21': FAST Sistem Hatası"),i("br"),a._v("'22':  FAST Ödeme İste Bilgileri Doğrulanamadı"),i("br"),a._v("'23':  FAST Ödeme İste Zaman Kontrolleri Doğrulanamadı"),i("br")])]),a._v(" "),i("tr",[i("td",[a._v("TR.OIS.DataCode.EvetHayir")]),a._v(" "),i("td",[a._v("E: Evet "),i("br"),a._v("H: Hayır")])]),a._v(" "),i("tr",[i("td",[a._v("TR.OIS.DataCode.KolasTur")]),a._v(" "),i("td",[a._v("Müşterinin sorgulama istediği Kolay Adres Tipi değeridir. Alabileceği değerler BKM “Kolay Adresleme Sistemi Uygulama Kuralları” belgesinde tanımlıdır: "),i("br"),a._v("T: Telefon Numarası "),i("br"),a._v("E: E-Posta"),i("br"),a._v("K: TCKN"),i("br"),a._v("V: VKN"),i("br"),a._v("Y: YKN"),i("br"),a._v("P: Pasaport Numarası")])])])])])}),[],!1,null,null,null);e.default=r.exports}}]);