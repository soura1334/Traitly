FROM maven:3.9.6-eclipse-temurin-21 AS build
WORKDIR /app
COPY . .
RUN mvn clean package -DskipTests

FROM eclipse-temurin:21-jdk
WORKDIR /app

COPY --from=build /app/target/server-0.0.1-SNAPSHOT.jar app.jar

EXPOSE 8080

CMD ["sh", "-c", "java -Dserver.port=$PORT -Dspring.config.location=/etc/secrets/application.properties -jar app.jar"]


