import React, { useEffect, useState } from 'react';
import md5 from 'md5';
function Marvel() {
  const [series, setSeries] = useState([]);
  useEffect(() => {
    obtenerSeriesMarvel();
  }, []);

  const obtenerSeriesMarvel = async () => {
    const publicKey = '3a1b4ff221a0a5ac65587a17c7d3bee7';
    const privateKey = '2986c7a3fc08542d134b9dbaf00c92ed13901ef5';
    const ts = Date.now().toString()
    const hash = md5 (ts + privateKey + publicKey);
    const url = `https://gateway.marvel.com/v1/public/series?ts=${ts}&apikey=${publicKey}&hash=${hash}`;
    const response = await fetch(url);
    const data = await response.json();
    console.log (data)
    setSeries(data.data.results);
  }
  

  return (

    <div>

      <h2>Series de Marvel:</h2>
      {series?
      (<ul>
        {series.map(s => (
          <li key={s.id}>{s.title}</li>
        ))}
      </ul>):(<h2>Cargando series pa</h2>)}
      
    </div>
  );
}

export default Marvel;
