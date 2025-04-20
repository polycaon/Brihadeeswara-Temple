const https = require('https');
const fs = require('fs');
const path = require('path');

const images = [
  {
    url: 'https://t3.ftcdn.net/jpg/05/59/74/36/240_F_559743693_dAUFbSqvfH03wwPI8YmWWB5d9wc4yDJy.jpg',
    path: 'public/images/temple-main.jpg'
  },
  {
    url: 'https://www.re-thinkingthefuture.com/wp-content/uploads/2019/02/1-3.jpg',
    path: 'public/images/content/temple-main.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1605649487212-47bdab064df7',
    path: 'public/images/blog/blog-architecture.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1604693331273-858fcfc384bf',
    path: 'public/images/blog/blog-festivals.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1590059300824-aa30d5cd4f4d',
    path: 'public/images/blog/blog-raja-raja-chola.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1558244661-d1458348479f',
    path: 'public/images/content/pattern-bg.jpg'
  }
];

async function downloadImage(url, filepath) {
  return new Promise((resolve, reject) => {
    const dir = path.dirname(filepath);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }

    https.get(url, (response) => {
      if (response.statusCode === 200) {
        const fileStream = fs.createWriteStream(filepath);
        response.pipe(fileStream);
        
        fileStream.on('finish', () => {
          fileStream.close();
          console.log(`Downloaded: ${filepath}`);
          resolve();
        });
      } else {
        reject(`Failed to download ${url}`);
      }
    }).on('error', (err) => {
      reject(err);
    });
  });
}

async function downloadAllImages() {
  for (const image of images) {
    try {
      await downloadImage(image.url, image.path);
    } catch (error) {
      console.error(`Error downloading ${image.url}:`, error);
    }
  }
}

downloadAllImages();