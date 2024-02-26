FROM node:21-alpine3.18
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