FROM node:16-buster-slim as build-stage
# Add git
RUN apt-get update && apt-get install -y git --no-install-recommends \
  && rm -rf /var/lib/apt/lists/* \
  && apt-get purge -y --auto-remove -o APT::AutoRemove::RecommendsImportant=false


# Build application
ENV PATH /app/node_modules/.bin:$PATH
WORKDIR /app
COPY package*.json /app/
RUN yarn install
COPY ./ /app/
RUN if test -f artifacts/.env; then mv artifacts/.env ./ && echo "Moved dotenv";fi \
    && yarn run build

FROM nginx:1.21
COPY --from=build-stage /app/dist/ /usr/share/nginx/html
COPY --from=build-stage /app/ci/nginx.conf /etc/nginx/conf.d/default.conf
