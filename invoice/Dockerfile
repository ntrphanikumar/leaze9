FROM 989431465196.dkr.ecr.ap-south-1.amazonaws.com/vg-base:npm-9.6.6-alpine
# Installs latest Chromium (100) package.
RUN apk add --no-cache \
      chromium \
      nss \
      freetype \
      harfbuzz \
      ca-certificates \
      ttf-freefont \
      nodejs \
      yarn
ENV PUPPETEER_EXECUTABLE_PATH=/usr/bin/chromium-browser
COPY app /opt/app
WORKDIR /opt/app
RUN rm -rf package-lock.json
RUN npm install --force
EXPOSE 3000
CMD ["./run.sh"]