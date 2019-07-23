DROP DATABASE IF EXISTS whatnow_db;
CREATE database whatnow_db;

USE whatnow_db;

CREATE TABLE convMessages
(
  ID INT NOT NULL AUTO_INCREMENT,
  InputMessageType VARCHAR (255) NULL,
  InputMessageContent VARCHAR (255) NULL,
  ResponseType VARCHAR (55) NULL,
  ResponseIntents VARCHAR (255),
  ResponseResults VARCHAR (255),
  Confidence FLOAT NULL,
  PRIMARY KEY (ID)
);

  SELECT *
  FROM convMessages;