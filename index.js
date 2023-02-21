function receivesAFunction(callback){
callback();
}

function returnsANamedFunction(){
  return function beforeAll(){};
}

function returnsAnAnonymousFunction(){
  return function(){};
}