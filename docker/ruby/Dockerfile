FROM ruby:2.6.3
RUN apt-get update -qq && apt-get install -y build-essential libpq-dev nodejs

WORKDIR /webapp

COPY ./api/Gemfile /webapp/Gemfile
COPY ./api/Gemfile.lock /webapp/Gemfile.lock

RUN cd /webapp
RUN bundle install

ADD . /webapp

# Add a script to be executed every time the container starts.
COPY entrypoint.sh /usr/bin/
RUN chmod +x /usr/bin/entrypoint.sh
ENTRYPOINT ["entrypoint.sh"]
EXPOSE 8000
