const { encode, decode } = require('./encodeDecode.js');

describe('testa as funções encode e decode', () => {
  it('encode é uma função', () => {
    expect(typeof encode).toEqual('function');
  });
  it ('converte apenas a volga a em número 1', () => {
    expect(encode('amada')).toEqual('1m1d1');
  });
  it ('converte apenas a volga e em número 2', () => {
    expect(encode('ele')).toEqual('2l2');
  });
  it ('converte apenas a volga i em número 3', () => {
    expect(encode('mimi')).toEqual('m3m3');
  });
  it ('converte apenas a volga o em número 4', () => {
    expect(encode('ovo')).toEqual('4v4');
  });
  it ('converte apenas a volga u em número 5', () => {
    expect(encode('ubuntu')).toEqual('5b5nt5');
  });
  it ('consulta se o retorno tem o mesmo número de caracteres', () => {
    expect(encode('Jotaro').length).toEqual(6);
  });


  it('decode é uma função', () => {
    expect(typeof decode).toEqual('function');
  });
  it ('converte apenas o número 1 na letra a', () => {
    expect(decode('1m1d1')).toEqual('amada');
  });
  it ('converte apenas o número 2 na letra e', () => {
    expect(decode('2l2')).toEqual('ele');
  });
  it ('converte apenas o número 3 na letra i', () => {
    expect(decode('m3m3')).toEqual('mimi');
  });
  it ('converte apenas o número 4 na letra o', () => {
    expect(decode('4v4')).toEqual('ovo');
  });
  it ('converte apenas o número 5 na letra u', () => {
    expect(decode('5b5nt5')).toEqual('ubuntu');
  });
  it ('consulta se o retorno tem o mesmo número de caracteres', () => {
    expect(decode('Jotaro').length).toEqual(6);
  });

})