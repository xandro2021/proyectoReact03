import styled from '@emotion/styled';

const Resultado = ({ resultado }) => {
  const { PRICE, HIGHDAY, LOWDAY, CHANGEPCT24HOUR, IMAGEURL, LASTUPDATE } = resultado;

  return (
    <div>
      <p> El precio es de: <span>{PRICE}</span> </p>
      <p> El precio mas alto del dia: <span>{HIGHDAY}</span> </p>
      <p> El precio mas bajo del dia: <span>{LOWDAY}</span> </p>
      <p> Variacio de las ultimas 24 horas: <span>{CHANGEPCT24HOUR}</span> </p>
      <p> Ultima Actualizacion: <span>{LASTUPDATE}</span> </p>
    </div>
  );
};

export default Resultado;
