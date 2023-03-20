import { CharactersCollection } from './CharactersCollection';
import { LinkedList } from './LinkedList';
import { NumberCollection } from './NumbersCollection';
import { Sorter } from './Sorter';

// const numbersCollection = new NumberCollection([10, 3, -5, 0]);
// numbersCollection.sort();
// console.log(numbersCollection.data);

// const charactersCollection = new CharactersCollection('Xaaayb');
// charactersCollection.sort();
// console.log(charactersCollection.data);

const linkList = new LinkedList();
linkList.add(500);
linkList.add(-10);
linkList.add(-3);
linkList.add(4);

linkList.sort();
linkList.print();
