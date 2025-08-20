# 🎯 PUBG Pusu Rehberi

PUBG oyununda haritalarındaki en etkili pusu (ambush/camper) noktalarını keşfedin! Modern, kullanıcı dostu arayüz ile taktiksel avantaj elde edin.

## ✨ Özellikler

- 🎨 **Modern Koyu Tema**: TailwindCSS ile tasarlanmış şık arayüz
- 📱 **Mobil Uyumlu**: Tüm cihazlarda mükemmel deneyim
- 🗺️ **9 Harita Desteği**: Erangel, Miramar, Sanhok, Vikendi, Taego, Paramo, Karakin, Deston, Rondo
- 🎯 **Detaylı Pusu Noktaları**: Her bölge için özel taktik önerileri
- 🖼️ **Görsel Rehber**: Thumbnail ve büyük modal görselleri
- 🌙 **Tema Değiştirici**: Açık/koyu tema desteği

## 🚀 Hızlı Başlangıç

### Yerel Çalıştırma
```bash
# 1. Projeyi indirin
git clone https://github.com/username/pubg-pusu-rehberi.git
cd pubg-pusu-rehberi

# 2. index.html'i doğrudan açın
# Veya HTTP sunucu ile:
python -m http.server 8000
# http://localhost:8000 adresinden erişin
```

### 🌐 GitHub Pages ile Yayınlama

1. **Repository Oluşturun**: GitHub'da yeni repo oluşturun
2. **Kodları Yükleyin**: Dosyaları repository'ye push edin
3. **Pages Aktif Edin**: 
   - Repository Settings → Pages
   - Source: `Deploy from a branch`
   - Branch: `main` (veya `master`)
   - Folder: `/ (root)`
4. **Erişim**: `https://kullaniciadi.github.io/pubg-pusu-rehberi/`

## 📁 Proje Yapısı

```
pubg-pusu-rehberi/
├── index.html          # Ana sayfa
├── styles.css          # Özel CSS stilleri  
├── script.js           # Uygulama mantığı ve veri
├── README.md           # Dokümantasyon
├── haritalar/          # Harita görselleri
├── bolgeler/           # Bölge görselleri
└── pusuMekan/          # Pusu noktası görselleri
```

## 🎮 Kullanım

1. **Harita Seçin**: Ana sayfada istediğiniz PUBG haritasını tıklayın
2. **Bölge Belirleyin**: Seçilen haritadaki bölgelerden birini seçin  
3. **Pusu Noktalarını Keşfedin**: O bölgedeki pusu noktalarını görüntüleyin
4. **Detayları İnceleyin**: Kartlara tıklayarak detaylı taktik bilgilerini okuyun

## 🛠️ Özelleştirme

### Yeni Pusu Noktası Ekleme
`script.js` dosyasındaki `DATA` objesini düzenleyin:

```javascript
'YeniHarita': {
  regions: {
    'YeniBolge': [
      {
        id: 'unique-id',
        name: 'Pusu Noktası Adı',
        thumb: './path/to/thumbnail.jpg',
        image: './path/to/fullsize.jpg', 
        tactic: 'Detaylı taktik açıklaması...'
      }
    ]
  }
}
```

### Görsel Güncelleme
- Harita görselleri: `haritalar/` klasörü
- Bölge görselleri: `bolgeler/` klasörü  
- Pusu noktası görselleri: `pusuMekan/` klasörü

## 📝 Lisans

Bu proje eğitim amaçlıdır. PUBG ve ilgili markalar ilgili sahiplerinin mülkiyetindedir.

## 🤝 Katkıda Bulunma

1. Fork edin
2. Feature branch oluşturun (`git checkout -b feature/amazing-feature`)
3. Commit edin (`git commit -m 'Add amazing feature'`) 
4. Push edin (`git push origin feature/amazing-feature`)
5. Pull Request açın

## ⚠️ Etik Kullanım

Bu rehber eğitim amaçlıdır. Oyunda adil oyun prensiplerini koruyun ve topluluk kurallarına uyun.
