# frontend-case-study
Frontend Developer Case Study

Proje Açıklaması

Bu proje, mikro frontend mimarisi ile Next.js ve React kullanılarak geliştirilmiş bir e-ticaret uygulamasıdır.

Mikro Frontend Yapısı:

Host Uygulama (Next.js): Remote bileşenleri entegre eden ana uygulama.

Products Remote (Next.js): Ürünleri listeleyen bağımsız bir mikro frontend.

Basket Remote (React): Sepete eklenen ürünleri gösteren bağımsız bir mikro frontend.

Kullanılan Teknolojiler

Frameworkler: Next.js, React

State Yönetimi: RTK Query

Modüler Yapı: Webpack 5 Module Federation

Tasarım Kütüphanesi: Ant Design

API: Fake Store API (Test amaçlı)

Dil: TypeScript

Kurulum & Çalıştırma

Projeyi klonlayın:

Bağımlılıkları yükleyin:

Uygulamaları çalıştırın:

Host uygulaması

Products Remote

Basket Remote

Proje Yapısı

Ekstra Notlar

Portlar: Host ve Remote uygulamaları farklı portlarda çalışır.

CORS Hataları: Gerekirse next.config.js içinde CORS yapılandırmasını güncelleyin.
Kod içerisinde otomatik olarak içerisinde belirlenen portlarda çalışacaktır projeleri farklı portlarda çalıştırmayın.
projenin kurulumu için 3 ayrı bileşen için ayrı ayrı npm install kodunu çalıştırın.

host-npm run dev

product-remote -npm run dev

basket-remote -npx webpack serve
