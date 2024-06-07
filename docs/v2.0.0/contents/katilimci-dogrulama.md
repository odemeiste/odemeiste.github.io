
# 8.Ödeme İste Zaman Aşımı ve FAST Doğrulama Kontrolleri


Borçlu ve Alacaklı ÖHS’nin Öİ talepleri için zaman aşımı kontrollerini yapması, Alacaklı ÖHS’nin Öİ talebine yönelik olarak gelen A01 mesajını doğrularken Öİ kapsamında aşağıda yer alan doğrulamaları gerçekleştirmesi beklenmektedir. 

Borçlu ÖHS SGZ’ye kadar henüz yanıtlanmamış Öİ taleplerini; Alacaklı ÖHS ise 
-	Hemen Öde senaryoları için SGZ+DTS(*)’ye kadar A01 mesajı gelmemiş ilgili Öİ taleplerini,

-	Sonra Öde senaryoları için,
    <br>Erken Ödeme ‘Evet’ ise SGZ + DTS’ye kadar Öİ yanıtı ya da A01 mesajı gelmemiş 
    <br>Erken Ödeme ‘Hayır’ ise SGZ + DTS’ye kadar Öİ yanıtı gelmemiş Öİ taleplerini zaman aşımı olarak işaretler.

Borçlu ÖHS zaman aşımına uğramış Öİ’lere Borçlu’nun yanıt vermesine izin vermez ve söz konusu talepleri zaman aşımına uğramış talepler olarak farklı bir durum bilgisi ile Borçlu’ya gösterir.
Alacaklı ÖHS zaman aşımına uğramış Öİ talepleri için A01 alması durumunda olumsuz T01 gönderir.

Zaman aşımı kontrollerine ve FAST Referans Belgesinde yer alan A01 doğrulama kurallarına ek olarak Alacaklı ÖHS,
-	Ödeme İste anında sistemine kaydettiği Öİ alanları ile kendisine gelen A01 mesajındaki alanları doğrulaması
-	Aşağıdaki tabloda yer alan TEÖZ’e yönelik kontrolleri yapması
gerekmektedir.

*Doğrulama Tolerans Süresi (DTS): Alacaklı ÖHS tarafından yapılacak doğrulama kontrollerinde iletişim hattında geçen sürenin de gözetilmesi için kullanılacak ilave süredir. Bu süre sistem tarafından belirlenir ve 60 saniyedir.



<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Tablo</title>
    <style>
        th, td {
            border: 1px solid black;
            border-collapse: collapse;
            padding: 8px;
            text-align: text-align:left;
        }
        th {
            background-color: #800000; /* Bordo rengi */
            color: white;
        }
        .bold {
            font-weight: bold;
        }
        .merged {
            border-right: 1px solid black; /* Sağ kenar çizgisi belirgin hale getirildi */
        }
    </style>
</head>
<body>
    <table>
        <tr>
            <th></th>
            <th>Şimdi Kabul<br>Hemen Öde</th>
            <th>Sonra Kabul<br>Hemen Öde</th>
            <th>Şimdi Kabul<br>Sonra Öde</th>
            <th>Sonra Kabul<br>Sonra Öde</th>
        </tr>
        <tr>
            <td class="bold">Borçlu ÖHS tarafından yapılacak zaman aşımı kontrolleri</td>
            <td colspan="4" class="merged">SGZ'den sonra Borçluya Öİ yanıt verilmesine izin verilmez. SGZ'den sonra zaman aşımına uğramış Öİ'ler zaman aşımına uğramış talepler olarak kullanıcıya farklı bir ekranda gösterilir.</td>
        </tr>
        <tr>
            <td colspan="1" class="bold">Alacaklı ÖHS tarafından yapılacak zaman aşımı kontrolleri</td>
            <td colspan="2" class="merged">(SGZ+DTS)'ye kadar A01 mesajı gelmediyse Alacaklı ÖHS ilgili Öİ'yi zaman aşımı olarak işaretler.<br>Bu durumda daha sonra gelen A01 mesajına olumsuz T01 dönülür.<br>(Not: Olumlu Öİ yanıtının gelmiş olması gerekir.)<br>*A01 gelme zamanı <= (SGZ+DTS) ise; Olumlu T01 gönder.<br>*A01 gelme zamanı > (SGZ+DTS) ise; Olumsuz T01 gönder.</td>
            <td colspan="2" class="merged">-Erken Ödeme Evet ise;<br>(SGZ+DTS)'ye kadar Öİ Yanıtı veya A01 mesajından birisi gelmediyse Alacaklı ÖHS ilgili Öİ'yi zaman aşımı olarak işarler.<br>-Erken Ödeme Hayır ise;<br>(SGZ+DTS)'ye kadar Öİ Yanıtı gelmediyse Alacaklı ÖHS ilgili Öİ'yi zaman aşımı olarak işaretler.<br> *Öİ Yanıtı gelme zamanı > (SGZ + DTS) ise; Olumsuz T01 gönder</td>
        </tr>
        <tr>
            <td rowspan="2" class="bold merged">Alacaklı ÖHS tarafındanilave olarak yapılacak A01 Doğrulama Kontrolleri</td>
            <td colspan="4" class="merged">*Öİ yanıtı olumsuz olmasına rağmen A01 gelmesi durumunda A01 kabul edilmez.(Olumsuz T01 gönder)<br>*Öİ anında sistemine kaydettiği Öİ alanları ile kendisine gelen A01 mesajındaki alanların doğrulamasını yapması gerekmektedir.<br>*Söz konusu alanlar Öİ API İlke ve Kurallar belgesinde detaylandırılmıştır.</td>
        </tr>
        <tr>
            <td colspan="2" class="merged"></td>
            <td colspan="2" class="merged">Talep Edilen Ödeme Zamanına Yönelik Kontroller:<br>Erken Ödeme Evet ise:<br>*ÖİYanıtı(olumlu) gelmiş ve A01 gelme zamanı < (TEÖZ+DTS) ise: Olumlu T01 gönder.<br>*Öİ yanıtı (olumlu) gelmiş ve A01 gelme zamanı > (TEÖZ+DTS) ise: Olumsuz T01 gönder.</td>
        </tr>
    </table>
</body>
