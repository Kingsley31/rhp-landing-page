# Install dependencies only when needed
FROM node:14.13.0-alpine
WORKDIR /app
COPY package.json ./ 
RUN npm install
COPY . ./


ENV NEXT_TELEMETRY_DISABLED 1

RUN npm run build

ENV NODE_ENV production

ENV PORT 3000

CMD ["npm", "start"]