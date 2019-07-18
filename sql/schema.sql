DROP DATABASE IF EXISTS whatnow_db;
CREATE database whatnow_db;

USE whatnow_db;

CREATE TABLE convMessages
(
  ID INT NOT NULL AUTO_INCREMENT,
  InputMessageType VARCHAR (255) NULL,
  InputMessageContent VARCHAR (255) NULL,
  ResponseType VARCHAR (55) NULL,
  ResponseHeader VARCHAR (255),
  ResponseResults VARCHAR (255),
  ResponseIntent VARCHAR (55),
  Confidence INT NULL,
  PRIMARY KEY (ID)
);

  SELECT *
  FROM convMessages;

  INSERT INTO convMessages
    (ID, InputMessageType, InputMessageContent, ResponseType, ResponseHeader, ResponseResults, ResponseIntent, Confidence)
  VALUES
    (1,2,2,22,2,2,2,2,2);
