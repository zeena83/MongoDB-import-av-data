# MongoDB-import-av-data

<h1>En övning för FEU16 - MongoDB import av data etc.</h1>

Öppna en kommandotolk i den katalog där du har MongoDBs klient och server, dvs ofta C:\"Program Files"\MongoDB\Server\3.4\bin
Starta sedan din MongoDB-server (om den inte redan är igång)
Sedan öppnar du ytterligare en kommandotolk (samma katalog) och  skriver där in följande rad. 
MEN SE TILL ATT DU ändrar sökvägen efter file så att det stämmer med din miljö.

mongoimport --db brfGrantoppen --jsonArray --collection members --file c:\users\apiro\hans\study\brf\register.json

Vad som då sker är att 6 document matas in i databasen "brfGrantoppen".

Får du fel så kopierar du felmeddelandet och googlar på det. Inget lär på samma sätt som fel.
