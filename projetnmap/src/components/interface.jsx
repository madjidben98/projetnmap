import Link from 'next/link';

function Interface() {
return (
<div className="flex justify-between items-center bg-gray-200 px-4 py-2">
<h1 className="text-4xl font-bold text-gray-800">
<Link href="/">NMAP</Link>
</h1>
<ul className="flex text-lg">
<li className="p-2 mx-2 hover:text-red-500">
<Link href="/">Accueil</Link>
</li>
<li className="p-2 mx-2 hover:text-red-500">
<Link href="/requete">Requête</Link>
</li>
<li className="p-2 mx-2 hover:text-red-500">
<Link href="/historique">Historique</Link>
</li>
<li className="p-2 mx-2 hover:text-red-500">
<Link href="/resultat">Résultat</Link>
</li>
<li className="p-2 mx-2">
<Link href="/signin">
<button className="bg-green-300 hover:bg-green-500 text-white font-bold py-2 px-4 rounded">
Sign IN
</button>
</Link>
</li>
</ul>
</div>
);
}

export default Interface;