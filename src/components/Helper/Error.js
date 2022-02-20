import React from 'react';
import { TittleErro, TextError, ConteinerError, ErrorPokemon } from './style';

function Error() {
  return (
    <ConteinerError>
      <TittleErro>Ops</TittleErro>
      <ErrorPokemon>
        <TextError>
          Este pokemon não foi
          <br /> encontrado ;(
        </TextError>
      </ErrorPokemon>
    </ConteinerError>
  );
}

export default Error;
