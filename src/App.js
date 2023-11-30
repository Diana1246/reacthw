 import './App.css';

 import React from 'react';

function App() {
  const name = 'Diana';
  
  const imgSrc = 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fyouthtimemag.com%2Fthe-world-of-cats%2F&psig=AOvVaw22FAx_Qp6keSopan1dbidS&ust=1701452709455000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCPCRyrGj7IIDFQAAAAAdAAAAABAE';
  const imgAlt = 'Cat';
  
  const site = {
    title: 'Tik Tok',
    url: 'https://www.TikTok.com/'
  };
  
  const num1 = 5;
  const num2 = 3;
  
  const colors = ['Yellow', 'Purple', 'Green'];

  return (
    <div>
      <h1>{name}</h1>
      
      <p>Ласкаво просимо до нашого сайту!</p>
      
      <img src={imgSrc} alt={imgAlt} />

      <tr></tr>
      <tr></tr>
      <tr></tr>
      
      <a href={site.url}>{site.title}</a>
      
      <p>{num1 + num2}</p>
      
      <ul>
        {colors.map(color => (
          <li key={color}>{color}</li>
        ))}
      </ul>
    </div>
  );
}

 

export default App;
