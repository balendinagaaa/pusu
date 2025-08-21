// Basit veri modeli: Harita -> Bölgeler -> Pusu Noktaları
// Görseller için yer tutucu olarak picsum.photos kullanıldı; istenirse gerçek oyun içi ekran görüntüleri ile değiştirilebilir.

const DATA = {
  Erangel: {
    regions: {
      'Military Solu': [
        {
          id: 'er-ck-1',
          name: 'Konteyner Pusu',
          thumb: './pusuMekan/copcuPususu.png',
          image: './pusuMekan/copcuPususu.png',
          tactic: 'Konteyner arkasından çıkıp ani saldırı yapın. Urban warfare taktiklerini kullanın. Şehir kenarındaki konteynerlerde gizlenip rotasyon kesin.'
        }
      ],
      'Farm': [
        {
          id: 'er-farm-1',
          name: 'Farm Pusu',
          thumb: './pusuMekan/farmPususu.png',
          image: './pusuMekan/farmPususu.png',
          tactic: 'İçi boş konteynerin içerisine gir'
        }
      ],
      'Pochinki Çıkışı': [
        {
          id: 'er-poc-1',
          name: 'Çöp Pusu',
          thumb: './pusuMekan/copPususu.png',
          image: './pusuMekan/copPususu.png',
          tactic: 'Binanın yanındaki boş çöp kutusuna gir. Gözükmemek için kutunun ucuna eşyalar koy'
        }
      ],
      'Stalber': [
        {
          id: 'er-st-1',
          name: 'Sarmaşık Pusu',
          thumb: './pusuMekan/sarmasikPususu.png',
          image: './pusuMekan/sarmasikPususu.png',
          tactic: 'Binanın yanındaki sarmaşıklara yat'
        }
      ],
      'Mylta Power Yan Sanayi': [
        {
          id: 'er-mp-1',
          name: 'Mylta Power Operasyonu',
          thumb: './pusuMekan/myltaPowerOperasyonu.png',
          image: './pusuMekan/myltaPowerOperasyonu.png',
          tactic: 'Motorla belirtilen alandan 100km+ hız ile üç varillerin üzerine kon'
        }
      ],
      'Vapur Pususu': [
        {
          id: 'er-vp-1',
          name: 'Vapur Pusu',
          thumb: './pusuMekan/vapurPususu.png',
          image: './pusuMekan/vapurPususu.png',
          tactic: 'Vapurun kaptan köşkündeki çıkıntının içerisine yat'
        }
      ],
      'Yasnaya': [
        {
          id: 'er-ya-1',
          name: 'Elektrik Direği Pusu',
          thumb: './pusuMekan/elektrikDiregiPususu.png',
          image: './pusuMekan/elektrikDiregiPususu.png',
          tactic: 'Tokinin çatısından elektrik direğine zipla'
        }
      ],
      'School': [
        {
          id: 'er-sc-1',
          name: 'Basket Potası Pusu',
          thumb: './pusuMekan/basketPotasiPususu.png',
          image: './pusuMekan/basketPotasiPususu.png',
          tactic: 'Basket potasının üzerine çık'
        }
      ]
    }
  },
  Miramar: {
    regions: {
      'Graveyard': [
        {
          id: 'mi-gr-1',
          name: 'Kiriş Pusu',
          thumb: './pusuMekan/KirisPususu.png',
          image: './pusuMekan/KirisPususu.png',
          tactic: 'Binanın içerisindeki tahta kirişlere çık'
        },
        {
          id: 'mi-gr-2',
          name: 'Çöp ve Taşlar Pusu',
          thumb: './pusuMekan/copVeTaslarPususu.png',
          image: './pusuMekan/copVeTaslarPususu.png',
          tactic: 'Mavi çöp birikintilerine yada duvar dibindeki taşlık alana yat'
        }
      ]
    }
  },
  Sanhok: {
    regions: {
      'Bootcamp Sag Ust Yol Ayrimi': [
        {
          id: 'sa-bc-1',
          name: 'Kiriş Pusu',
          thumb: './pusuMekan/kirisPususu1.png',
          image: './pusuMekan/kirisPususu1.png',
          tactic: 'Tahta kirişin üzerine çık',
          alternateImage: './pusuMekan/KirisPususu2.png'
        }
      ],
      'Loot Pususu': [
        {
          id: 'sa-lp-1',
          name: 'Loot Pusu',
          thumb: './pusuMekan/lootPususu.png',
          image: './pusuMekan/lootPususu.png',
          tactic: 'Kamyondan düşen büyük loot sandığını kullanarak yat'
        }
      ],
      'Bhan': [
        {
          id: 'sa-bh-1',
          name: 'Görünmez Pusu',
          thumb: './pusuMekan/gorunmezPususu.png',
          image: './pusuMekan/gorunmezPususu.png',
          tactic: 'Kirişlerin üzerindeki sarmaşıkların içerisine yat'
        }
      ],
      'Bootcamp': [
        {
          id: 'sa-bc2-1',
          name: 'Yanan Araba Pusu',
          thumb: './pusuMekan/yananArabaPususu.png',
          image: './pusuMekan/yananArabaPususu.png',
          tactic: 'Alev almış arabadan çıkan dumanın içine pus'
        },
        {
          id: 'sa-bc2-2',
          name: 'Hangar Çatı Pusu',
          thumb: './pusuMekan/hangarCatiPususu.png',
          image: './pusuMekan/hangarCatiPususu.png',
          tactic: 'Motorla belirtilen alandan 100km+ hız ile üç çatıya kon'
        }
      ],
             'Tatmokun Aşağısı': [
         {
           id: 'sa-ta-1',
           name: 'Mavi Muşamba Pusu',
           thumb: './pusuMekan/maviMusambaPususu.png',
           image: './pusuMekan/maviMusambaPususu.png',
           tactic: 'Mavi muşambanın içerisine yat'
         }
       ],
       'Paradise': [
         {
           id: 'sa-pa-1',
           name: 'Ağaçtaki Kuş Pusu',
           thumb: './pusuMekan/agactakiKusPususu.png',
           image: './pusuMekan/agactakiKusPususu.png',
           tactic: 'Binanın balkonundan ağacın üzerine zipla ve ağaca tüne'
         }
       ],
       'Çalının İçerisinde Araba': [
         {
           id: 'sa-ca-1',
           name: 'Çalının İçine Araba Pusu',
           thumb: './pusuMekan/calininIcineArabaPususu.png',
           image: './pusuMekan/calininIcineArabaPususu.png',
           tactic: 'Çalının arka kısmına arabanın arka koltuk kısmını yanaştır ve arka koltuğa pus'
         }
       ]
    }
  },
  Vikendi: {
    regions: {}
  },
  Taego: {
    regions: {}
  },
  Paramo: {
    regions: {
      Heykel: [
        {
          id: 'pa-he-1',
          name: 'Heykel Çıkıntısı',
          thumb: './pusuMekan/HeykelPususu.png',
          image: './pusuMekan/HeykelPususu.png',
          tactic: 'Çıkıntıya tırmanıp bombayla beklemek'
        }
      ],
      Lab: [
        {
          id: 'pa-lab-1',
          name: 'Lab Lambaları',
          thumb: './pusuMekan/Lab1.png',
          image: './pusuMekan/Lab1.png',
          tactic: 'Lambaların üzerine tırmanarak üst avantajı elde edin. Rakipler sizi göremeyecek açıda pozisyon alın.',
          alternateImage: './pusuMekan/Lab2.png'
        },
        {
          id: 'pa-lab-2',
          name: 'Lab Bitki Pusu',
          thumb: './pusuMekan/LabBitkiPususu.png',
          image: './pusuMekan/LabBitkiPususu.png',
          tactic: 'Laboratuvardaki bitkilerin içerisinde yat'
        }
      ]
    }
  },
  Karakin: {
    regions: {
      'Ağaç Pusu Mekanı': [
        {
          id: 'ka-ap-1',
          name: 'Ağaç Arkası Pusu',
          thumb: './pusuMekan/agacPususu.png',
          image: './pusuMekan/agacPususu.png',
          tactic: 'Kalın ağaç gövdesinin arkasında bekleyin. Rakip yaklaşırken çıkıp flanklama yapın. Küçük haritada ağaç koruması önemlidir.'
        }
      ],
      'Al Habar 3 Bina': [
        {
          id: 'ka-ah-1',
          name: 'Tekstil Pusu',
          thumb: './pusuMekan/tekstilPususu.png',
          image: './pusuMekan/tekstilPususu.png',
          tactic: 'Kumaş makinelerinin üzerine tırman'
        }
      ],
      'Yer Alti Pususu': [
        {
          id: 'ka-ya-1',
          name: 'Altın Pusu',
          thumb: './pusuMekan/altinPususu.png',
          image: './pusuMekan/altinPususu.png',
          tactic: 'Yer altındaki altın vagonlarının içerisine yat'
        }
      ]
    }
  },
  Deston: {
    regions: {}
  },
  Rondo: {
    regions: {
      'Kapı Arkası': [
        {
          id: 'ro-ka-1',
          name: 'Kapı Arkası 2',
          thumb: './pusuMekan/kapiArkasi2.png',
          image: './pusuMekan/kapiArkasi2.png',
          tactic: 'İçeriye yem olarak malzemeler at ve kapının arkasında bekle'
        }
      ]
    }
  }
};

// Harita görselleri (haritalar klasöründen)
const MAP_IMAGES = {
  Erangel: './haritalar/erangel.png',
  Miramar: './haritalar/miramar.png',
  Sanhok: './haritalar/sanhok.png',
  Vikendi: './haritalar/vikendi.png',
  Taego: './haritalar/taego.png',
  Karakin: './haritalar/karakin.png',
  Paramo: './haritalar/paramo.png',
  Deston: './haritalar/deston.png',
  Rondo: './haritalar/rondo.png',
  'Heykel': './bolgeler/Heykel.png',
  'Lab': './bolgeler/Lab.png',
  'Ağaç Pusu Mekanı': './bolgeler/agacPususuMekan.png',
  'Military Solu': './bolgeler/copKonteyneri.png',
  'Farm': './bolgeler/farm.png',
  'Pochinki Çıkışı': './bolgeler/PochinkiCikisi.png',
  'Al Habar 3 Bina': './bolgeler/alHabar3Bina.png',
  'Stalber': './bolgeler/Stalber.png',
  'Mylta Power Yan Sanayi': './bolgeler/MyltaPowerYanSanayi.png',
  'Graveyard': './bolgeler/Graveyard.png',
  'Bootcamp Sag Ust Yol Ayrimi': './bolgeler/bootcampSagUstYolAyrimi.png',
  'Vapur Pususu': './haritalar/erangel.png',
  'Yer Alti Pususu': './haritalar/karakin.png',
  'Loot Pususu': './haritalar/sanhok.png',
  'Yasnaya': './bolgeler/yasnaya.png',
           'Bhan': './bolgeler/bhan.png',
         'Bootcamp': './bolgeler/bootcamp.png',
         'School': './bolgeler/school.png',
         'Tatmokun Aşağısı': './bolgeler/tatmokAsagisi.png',
         'Paradise': './bolgeler/paradise.png',
         'Çalının İçerisinde Araba': './haritalar/sanhok.png',
         'Kapı Arkası': './bolgeler/kapiArkasi.png'
};

const state = {
  currentMap: null,
  currentRegion: null
};

const el = {
  year: document.getElementById('year'),
  mapList: document.getElementById('mapList'),
  regionList: document.getElementById('regionList'),
  spotGrid: document.getElementById('spotGrid'),
  resultMeta: document.getElementById('resultMeta'),
  mapColumn: document.getElementById('mapColumn'),
  regionColumn: document.getElementById('regionColumn'),
  spotColumn: document.getElementById('spotColumn'),
  regionTitle: document.getElementById('regionTitle'),
  spotTitle: document.getElementById('spotTitle'),
  backToMaps: document.getElementById('backToMaps'),
  backToRegions: document.getElementById('backToRegions'),
  modal: document.getElementById('modal'),
  modalTitle: document.getElementById('modalTitle'),
  modalSubtitle: document.getElementById('modalSubtitle'),
  modalImage: document.getElementById('modalImage'),
  modalTactic: document.getElementById('modalTactic'),
  modalClose: document.getElementById('modalClose'),
  themeToggle: document.getElementById('themeToggle'),
  iconSun: document.getElementById('iconSun'),
  iconMoon: document.getElementById('iconMoon')
};

function setYear() {
  el.year.textContent = new Date().getFullYear();
}

function createPill(text, isActive = false, imagePath = null) {
  const btn = document.createElement('button');
  btn.className = 'pill' + (isActive ? ' pill--active' : '');
  
  if (text === 'Heykel' || text === 'Lab') {
    // Heykel ve Lab için özel görsel
    const img = document.createElement('img');
    img.src = `./bolgeler/${text}.png`;
    img.alt = text;
    img.style.width = '24px';
    img.style.height = '24px';
    img.style.borderRadius = '4px';
    img.style.objectFit = 'cover';
    btn.appendChild(img);
  } else {
    btn.textContent = text;
  }
  
  return btn;
}

function renderMaps() {
  el.mapList.innerHTML = '';
  // Sabit sıralama: 3x3 düzeninde istediğin sırayla
  const orderedMaps = [
    'Erangel', 'Miramar', 'Sanhok',
    'Vikendi', 'Taego', 'Paramo',
    'Karakin', 'Deston', 'Rondo'
  ];
  
  orderedMaps.forEach((mapName) => {
    const isActive = state.currentMap === mapName;
    const card = document.createElement('button');
    card.className = 'map-card' + (isActive ? ' map-card--active' : '');
    const imgSrc = MAP_IMAGES[mapName] || '';
    card.innerHTML = `
      <img src="${imgSrc}" alt="${mapName}" class="map-image" loading="lazy" />
      <div class="map-overlay"></div>
      <div class="map-caption">
        <div class="map-name">${mapName}</div>
        <span class="map-badge">${isActive ? 'Seçili' : 'Seç'}</span>
      </div>
    `;
    card.addEventListener('click', () => {
      if (isActive) {
        // Eğer zaten seçili haritaya tıklandıysa, ana sayfaya dön
        state.currentMap = null;
        state.currentRegion = null;
        el.mapColumn.classList.remove('hidden');
        el.regionColumn.classList.add('hidden');
        el.spotColumn.classList.add('hidden');
      } else {
        // Yeni harita seçimi - haritaları gizle, bölgeleri göster
        state.currentMap = mapName;
        state.currentRegion = null;
        el.mapColumn.classList.add('hidden');
        el.regionColumn.classList.remove('hidden');
        el.spotColumn.classList.add('hidden');
      }
      renderMaps();
      renderRegions();
      renderSpots();
    });
    el.mapList.appendChild(card);
  });
}

function renderRegions() {
  el.regionList.innerHTML = '';
  const gridContainer = document.createElement('div');
  gridContainer.className = 'regions-grid';
  el.regionList.appendChild(gridContainer);

  // Başlığı güncelle
  if (state.currentMap) {
    el.regionTitle.textContent = `${state.currentMap} Bölgeleri`;
  } else {
    el.regionTitle.textContent = 'Bölgeler';
  }

  if (!state.currentMap) {
    gridContainer.innerHTML = '<div class="text-sm text-neutral-500">Önce haritayı seçin</div>';
    return;
  }
  if (!DATA[state.currentMap] || !DATA[state.currentMap].regions) {
    gridContainer.innerHTML = '<div class="text-sm text-neutral-500">Bu harita için bölge verisi yok</div>';
    return;
  }

  const regions = Object.keys(DATA[state.currentMap].regions);
  regions.forEach((regionName) => {
    const isActive = state.currentRegion === regionName;
    const card = document.createElement('div');
    card.className = `region-card${isActive ? ' active' : ''}`;

    // Görsel varsa göster, yoksa placeholder göster
    let imgSrc = MAP_IMAGES[regionName];
    if (imgSrc) {
      card.innerHTML = `<img src="${imgSrc}" alt="${regionName}" /><div class="region-title">${regionName}</div>`;
    } else {
      // Placeholder için PUBG temalı görsel
      card.innerHTML = `
        <div style="height: 70%; background: linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%); display: flex; align-items: center; justify-content: center; border-bottom: 1px solid var(--border);">
          <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="#f59e0b" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M2 17L12 22L22 17" stroke="#f59e0b" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M2 12L12 17L22 12" stroke="#f59e0b" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </div>
        <div class="region-title">${regionName}</div>
      `;
    }

    card.addEventListener('click', () => {
      if (isActive) {
        // Eğer zaten seçili bölgeye tıklandıysa, harita seçimine geri dön
        state.currentRegion = null;
        el.regionColumn.classList.remove('hidden');
        el.spotColumn.classList.add('hidden');
      } else {
        // Yeni bölge seçimi - bölgeleri gizle, pusu noktalarını göster
        state.currentRegion = regionName;
        el.regionColumn.classList.add('hidden');
        el.spotColumn.classList.remove('hidden');
      }
      renderRegions();
      renderSpots();
    });
    gridContainer.appendChild(card);
  });
}

function renderSpots() {
  el.spotGrid.innerHTML = '';
  const gridContainer = document.createElement('div');
  gridContainer.className = 'spot-grid';
  el.spotGrid.appendChild(gridContainer);

  // Başlığı güncelle
  if (state.currentMap && state.currentRegion) {
    el.spotTitle.textContent = `${state.currentRegion} Pusu Noktaları`;
  } else {
    el.spotTitle.textContent = 'Pusu Noktaları';
  }

  if (!state.currentMap || !state.currentRegion) {
    el.resultMeta.textContent = '';
    gridContainer.innerHTML = '<div class="text-sm text-neutral-500">Önce harita ve bölge seçin</div>';
    return;
  }
  if (!DATA[state.currentMap] || !DATA[state.currentMap].regions) {
    el.resultMeta.textContent = '';
    gridContainer.innerHTML = '<div class="text-sm text-neutral-500">Bu harita için veri yok</div>';
    return;
  }

  const spots = DATA[state.currentMap].regions[state.currentRegion] || [];
  el.resultMeta.textContent = `${spots.length} pusu noktası`;

  // Tüm pusu noktalarını göster
  spots.forEach((spot, index) => {
    const card = document.createElement('button');
    card.className = 'spot-card';
    card.innerHTML = `
      <div class="thumb">
        <img src="${spot.thumb}" alt="${spot.name}" loading="lazy" />
        <div class="overlay"></div>
        <div class="thumb-bar">
          <div>
            <div class="title">${spot.name}</div>
            <div class="subtitle">${state.currentMap} • ${state.currentRegion}</div>
          </div>
          <span class="badge">Detay</span>
        </div>
      </div>
    `;
    card.addEventListener('click', () => openModal(spot));
    gridContainer.appendChild(card);
  });
}

function openModal(spot) {
  el.modalTitle.textContent = spot.name;
  el.modalSubtitle.textContent = `${state.currentMap} • ${state.currentRegion}`;
  el.modalImage.src = spot.image;
  el.modalTactic.textContent = spot.tactic;
  el.modal.classList.remove('hidden');
  document.body.classList.add('modal-open');

  // Lab görselleri için değişim animasyonu
  if (spot.alternateImage) {
    let isFirstImage = true;
    const intervalId = setInterval(() => {
      el.modalImage.src = isFirstImage ? spot.alternateImage : spot.image;
      isFirstImage = !isFirstImage;
    }, 1000);

    // Modal kapandığında interval'i temizle
    const clearImageInterval = () => {
      clearInterval(intervalId);
      el.modal.removeEventListener('hidden', clearImageInterval);
    };
    el.modal.addEventListener('hidden', clearImageInterval);
  }
}

function closeModal() {
  el.modal.classList.add('hidden');
  document.body.classList.remove('modal-open');
}

// Kapatma davranışları
el.modalClose.addEventListener('click', closeModal);
el.modal.addEventListener('click', (e) => {
  if (e.target === el.modal) closeModal();
});
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && !el.modal.classList.contains('hidden')) closeModal();
});

// Tema değiştirici
function syncThemeIcon() {
  const isDark = document.documentElement.classList.contains('dark');
  el.iconSun.classList.toggle('hidden', !isDark);
  el.iconMoon.classList.toggle('hidden', isDark);
}

el.themeToggle.addEventListener('click', () => {
  const root = document.documentElement;
  const isDark = root.classList.toggle('dark');
  localStorage.setItem('theme', isDark ? 'dark' : 'light');
  syncThemeIcon();
});

// Geri dönüş butonları
el.backToMaps.addEventListener('click', () => {
  state.currentMap = null;
  state.currentRegion = null;
  el.mapColumn.classList.remove('hidden');
  el.regionColumn.classList.add('hidden');
  el.spotColumn.classList.add('hidden');
  renderMaps();
  renderRegions();
  renderSpots();
});

el.backToRegions.addEventListener('click', () => {
  state.currentRegion = null;
  el.regionColumn.classList.remove('hidden');
  el.spotColumn.classList.add('hidden');
  renderRegions();
  renderSpots();
});

// İlk yükleme
setYear();
renderMaps();
syncThemeIcon();




