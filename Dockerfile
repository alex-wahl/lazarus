FROM openjdk:18-jdk-slim
RUN apt-get update && \
    apt-get upgrade -y && \
    apt-get install libxcb1 -y && \
    apt-get install chromium -y && \
    apt-get -y install chromium-driver -y && \
    apt-get install -y maven
COPY pom.xml /usr/local/service/pom.xml
COPY log4j.properties /usr/local/service/log4j.properties
COPY src /usr/local/service/src
WORKDIR /usr/local/service/
RUN mvn clean
CMD ["java", "test", "-Dcucumber.options=", "mvn", "sh", "bash"]