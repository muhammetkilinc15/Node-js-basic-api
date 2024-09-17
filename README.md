# Node.js ve React ile Basit E-Ticaret Sitesi

Bu proje, Node.js ve Express ile geliştirilmiş bir API ve React tabanlı bir ön yüz içeren basit bir e-ticaret sitesidir. API, MySQL veritabanı ile çalışır ve Sequelize ORM ile yapılandırılmıştır. Kullanıcılar ve ürünler hakkında veriler sunar. React uygulaması ise bu API'yi kullanarak kullanıcılar için etkileşimli bir arayüz sağlar.

## Gerekli Modüller
### Node.js API için:
- `express`
- `sequelize`
- `mysql2`
- `dotenv`
- `jsonwebtoken`
- `cors`
- `body-parser`

### React için:
- `react`
- `react-dom`
- `react-router-dom`
- `axios`

## Kurulum
### Node.js API Kurulumu
1. Projeyi klonlayın:
   ```bash
   git clone https://github.com/kullaniciadi/Node-js-basic-api.git
   

2. Proje dizinine gidin:
  ```bash
     cd Node-js-basic-api 

3. Gerekli modülleri yükleyin:
 ```bash
     Ortam değişkenlerini yapılandırın: .env dosyasını oluşturun ve aşağıdaki gibi gerekli değişkenleri ekleyin:



PORT=5000
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=yourpassword
DB_NAME=yourdatabase
JWT_SECRET=your_jwt_secret_key
