# portfolio-REACT
Réalisation du portfolio en REACT

Problème avec le routeur, ai du changer le code Balise Switch pas reconnu. 
https://stackoverflow.com/questions/63124161/attempted-import-error-switch-is-not-exported-from-react-router-dom

Message n° 9

Dans App.js
<Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/cybersecurite" element={<Cybersecurite/>}/>
      <Route path="/presentation" element={<Presentation/>}/>
      <Route path="/script-1" element={<Script1/>}/>
      <Route path="/script-2" element={<Script2/>}/>
      <Route path="/script-3" element={<Script3/>}/>
      <Route path="/script-4" element={<Script4/>}/>


      <Route path="/studi" element={<Studi/>}/>
      <Route path="/liens" element={<Liens/>}/>
      
      
    </Routes>
