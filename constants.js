let NMHE_PLAYERS = [
	"Wendy",
	"Charmant",
	"Thal",
	"Oliver",
	"Lorelei",
	"Judy",
	"Shtigrou",
	"Poppy",
	"Moon",
	"Cally",
	"Moira",
	"Sally",
	"Balais",
	"Stram",
	"Crochet",
	"Clochette",
	"Esmée",
	"Rox",
	"Clawd",
	"Timon",
	"Hadès",
	"Mally",
	"Varian",
	"Vitani",
	"Prince Adam",
	"Flynn",
	"Maui",
]

let day1_actions = [
	{
		key: 'RUN',
		value: 1,
		luck: 10,
		resume: 's\'en va en courant et ne prends même pas le temps de fouiller le camp de départ. Est-ce une bonne stratégie ?',
		death: 'NO',		
		multiple_player: 'NO'
	}
	,
	{
		key: 'FOOD',
		value: 2,
		luck: 4,
		resume: 'trouve de la nourriture, cela pourra lui être utile pour sa survie. Enfin... Si personne ne lui vole d\'ici là !',
		death: 'NO',		
		multiple_player: 'NO'
	}
	,
	{
		key: 'WATER',
		value: 3,
		luck: 4,
		resume: 'est un chanceux et trouve de l\'eau, pouvoir s\'abreuver en toutes circonstances, sans doute le point le plus important ici.',
		death: 'NO',		
		multiple_player: 'NO'
	}
	,
	{
		key: 'WEAPON',
		value: 4,
		luck: 2,
		multiple_player: 'NO',
		resume: 'a trouvé de quoi combattre, enfin, si on peut appeler ce petit pieu une arme ?',
		death: 'NO',	
		multiple_player: 'NO'
	}
	,
	{
		key: 'START_KILL',
		value: 5,
		luck: 1,
		multiple_player: 'NO',
		resume: 'tue ** TARGET_PLAYER ** dès le départ de ce HG en l\'assènant de violents coups ! Quelle violence...',
		death: 'TARGET_PLAYER',	
		multiple_player: 'NO',
		death_reason: 'Tué par de violents coups de PLAYER dès le départ.'
	}
]

let aloneActions = [
	{
		key: 'SEARCH_FOOD_HUNTING',
		value: 1,
		luck: 4,
		resume: 'part à la chasse, dans l\'espoir de trouver quelque chose à manger.',
		death: 'NO',		
		multiple_player: 'NO'
	}
	,
	{
		key: 'SEARCH_FOOD_FISHING_FAIL',
		value: 2,
		luck: 4,
		resume: 'tente de pêcher avec une canne à pêche de fortune. Encore faudrait-il mettre un âppat pour espérer attraper quelque chose...',
		death: 'NO',		
		multiple_player: 'NO'
	}
	,
	{
		key: 'POISON',
		value: 3,
		luck: 2,
		resume: 'mange des fruits empoisonnés, c\'est toujours mieux de mourir ainsi que de se faire étouffer par la robe de nuit de Wendy Darling !',
		death: 'PLAYER',		
		multiple_player: 'NO',
		death_reason: 'Mort en mangeant des fruits empoisonnés.'
	}
	,
	{
		key: 'TRY_TO_SWIN_DIE',
		value: 5,
		luck: 2,
		resume: 's\'octroie une petite pause et se jette dans la rivière pour se rafraichir. Une vive crampe vient l\'empêcher de nager correctement. La noyade n\'est ici par une option et nous pouvons donc décerner le Darwin Award à ce concurrent !',
		death: 'PLAYER',		
		multiple_player: 'NO',
		death_reason: 'Noyé ens\'octoyant une pause dans la rivière.'
	}
	,
	{
		key: 'FLOWER',
		value: 7,
		luck: 4,
		resume: 'ne sait pas quoi faire de sa journée et est très peu intéressé par ce qu\'il se passe aux alentours et décide donc de cueillir des fleurs pour s\'en faire un collier.',
		death: 'NO',		
		multiple_player: 'NO'
	}
	,
	{
		key: 'FIND_HEAVY_WEAPON',
		value: 8,
		luck: 4,
		resume: 'trouve une arme lourde dans un camp abandonné, ce qui lui donne un sacré avantage pour le reste de ce NMHunger Game !',
		death: 'NO',		
		multiple_player: 'NO'
	}
	,
	{
		key: 'WOODS',
		value: 9,
		luck: 4,
		resume: 's\'enfonce dans la forêt pour se sentir plus protégé et caché par les arbres massifs qui la compose. Mais qui sait ce qui l\'attend au fin fond de cette forêt ?',
		death: 'NO',		
		multiple_player: 'NO'
	}
	,
	{
		key: 'BLESSURE',
		value: 12,
		luck: 4,
		resume: 'essaie de panser ses blessures. Cela risque d\'être handicapant pour la suite de l\'aventure !',
		death: 'NO',		
		multiple_player: 'NO'
	}
	,
	{
		key: 'FALL',
		value: 13,
		luck: 2,
		resume: 'admirait tranquillement la vue au bord de la falaise. Un léger faux pas l\'aura fait glisser, son cri au moment de sa mort résonnera encore dans tous les esprits !',
		death: 'PLAYER',		
		multiple_player: 'NO',
		death_reason: 'Mort en tombant d\'une falaise'
	}
	,
	{
		key: 'THINKING_HOME',
		value: 15,
		luck: 4,
		resume: 'pense à ce qui l\'attends chez lui !',
		death: 'NO',		
		multiple_player: 'NO'
	}
	,
	{
		key: 'LOVE_THINKING',
		value: 16,
		luck: 6,
		resume: 'a aperçu ** TARGET_PLAYER ** dans la journée, ses pensées sont tournées vers ce concurrent et il ne s\'agit pas forcément de pensées très catholiques.',
		death: 'NO',		
		multiple_player: 'NO'
	}
	,
	{
		key: 'WALK',
		value: 17,
		luck: 4,
		resume: 'marche toute la journée, sans rien faire.',
		death: 'NO',		
		multiple_player: 'NO'
	}
	,
	{
		key: 'CRAZY',
		value: 18,
		luck: 4,
		resume: 'commence à devenir fou ou alors... était-ce déjà le cas ?',
		death: 'NO',		
		multiple_player: 'NO'
	}
	,
	{
		key: 'DARWIN_KILL',
		value: 19,
		luck: 2,
		resume: '',
		death: 'PLAYER',		
		multiple_player: 'NO'
	}
	,
	{
		key: 'SING',
		value: 100,
		luck: 4,
		resume: 'chante I\'m singing in the rain alors qu\'il pleut, attention à ne pas tomber bêtement malade juste pour cette blague chantante !',
		death: 'NO',		
		multiple_player: 'NO'
	}
	,
	{
		key: 'CRY',
		value: 101,
		luck: 4,
		resume: 'commence à pleurer, à ce rythme on va bientôt se retrouver submergé !',
		death: 'NO',		
		multiple_player: 'NO'
	}
	,
	{
		key: 'HIDE',
		value: 102,
		luck: 4,
		resume: 'se cache comme un petit couard pour échapper à la mort !',
		death: 'NO',		
		multiple_player: 'NO'
	}
	,
	{
		key: 'MUSIC',
		value: 103,
		luck: 4,
		resume: 's\'est fabriqué un instrument de musique avec le peu de choses que l\'on trouve ici et commence à faire de la musique. Attention à ce que ça n\'attire pas les autres concurrents dans sa direction !',
		death: 'NO',		
		multiple_player: 'NO'
	}
	,
	{
		key: 'DANCE',
		value: 104,
		luck: 4,
		resume: 'se met à danser la macarena sans aucune raison !',
		death: 'NO',		
		multiple_player: 'NO'
	}
	,
	{
		key: 'BAIGNADE',
		value: 105,
		luck: 4,
		resume: 'se fait une petite baignade, comme si c\'était le moment :man_shrugging:',
		death: 'NO',		
		multiple_player: 'NO'
	}
	,
	{
		key: 'BATH',
		value: 106,
		luck: 4,
		resume: 'profite d\'une accalmie pour prendre une petite douche, on sait jamais, il faut être propre pour mourir !',
		death: 'NO',		
		multiple_player: 'NO'
	}
	,
	{
		key: 'THINKING_PLAN',
		value: 107,
		luck: 4,
		resume: 'réfléchit à un plan efficace pour la journée de demain, cependant l\'efficacité est-elle vraiment l\'un des points forts de ce concurrent ?',
		death: 'NO',		
		multiple_player: 'NO'
	}
	,
	{
		key: 'SIT',
		value: 108,
		luck: 4,
		resume: 's\'asseoit en tailleur en plein milieu d\'un champ sans rien faire et contemple le ciel, ce concurrent est peut-être débile ?',
		death: 'NO',		
		multiple_player: 'NO'
	}
	,
	{
		key: 'HUNGRY_DEATH',
		value: 109,
		luck: 2,
		resume: 'ne s\'est pas assez nourri et fini par mourrir de faim, quelle triste fin.',
		death: 'PLAYER',		
		multiple_player: 'NO',
		death_reason: 'Mort de faim'
	}
	,
	{
		key: 'THIRSTY_DEATH',
		value: 110,
		luck: 2,
		resume: 'ne s\'est pas assez abbreuvé, sa vue se brouille petit à petit et ce concurrent fini par s\'écrouler au sol pour mourir bêtement de soif.',
		death: 'PLAYER',		
		multiple_player: 'NO',
		death_reason: 'Mort de soif.'
	}
	,
	{
		key: 'ALLERGIC_REACTION',
		value: 114,
		luck: 3,
		resume: 'fait une réaction allergique à de la nourriture envoyé par les sponsors, quelle tristesse, heureusement ça ne lui coûtera pas la vie  !',
		death: 'NO',		
		multiple_player: 'NO',
	}
	,
	{
		key: 'GENETIC_ANIMAL',
		value: 112,
		luck: 3,
		death: 'NO',
		resume: 'aperçoit un petit animal au loin et décide de s\'en approcher. Cependant il s\'agit d\'un animal génétiquement modifié et se fait donc attaquer par celui-ci ! Heureusement pour notre concurrent, il parvient à s\'échapper !',
		multiple_player: 'NO',
	}
]

let otherDay_actions = [
	{
		key: 'SEARCH_FOOD_HUNTING',
		value: 1,
		luck: 4,
		resume: 'part à la chasse, dans l\'espoir de trouver quelque chose à manger.',
		death: 'NO',		
		multiple_player: 'NO'
	}
	,
	{
		key: 'SEARCH_FOOD_FISHING_FAIL',
		value: 2,
		luck: 6,
		resume: 'tente de pêcher avec une canne à pêche de fortune. Encore faudrait-il mettre un âppat pour espérer attraper quelque chose...',
		death: 'NO',		
		multiple_player: 'NO'
	}
	,
	{
		key: 'POISON',
		value: 3,
		luck: 2,
		resume: 'mange des fruits empoisonnés, c\'est toujours mieux de mourir ainsi que de se faire étouffer par la robe de nuit de Wendy Darling !',
		death: 'PLAYER',		
		multiple_player: 'NO',
		death_reason: 'Mort en mangeant des fruits empoisonnés.'
	}
	,
	{
		key: 'FAIL_KILL',
		value: 4,
		luck: 6,
		resume: 'essaie de tuer ** TARGET_PLAYER ** à l\'aide d\'une flèche bien placée mais un coup de vent viens finalement dévier la trajectoire et ** TARGET_PLAYER ** ne se rend même pas compte de ce qu\'il vient de se passer !',
		death: 'NO',		
		multiple_player: 'YES'
	}
	,
	{
		key: 'TRY_TO_SWIN_DIE',
		value: 5,
		luck: 2,
		resume: 's\'octroie une petite pause et se jette dans la rivière pour se rafraichir. Une vive crampe vient l\'empêcher de nager correctement. La noyade n\'est ici par une option et nous pouvons donc décerner le Darwin Award à ce concurrent !',
		death: 'PLAYER',		
		multiple_player: 'NO',
		death_reason: 'Mort noyé en s\'octroyant une pause dans la rivière.'
	}
	,
	{
		key: 'ASK_SUICIDE',
		value: 6,
		luck: 4,
		resume: 'demande à ** TARGET_PLAYER ** de mettre fin à ses souffrances mais ** TARGET_PLAYER ** refuse et lui laisse la vie sauve, du moins pour le moment !',
		death: 'NO',		
		multiple_player: 'YES'
	}
	,
	{
		key: 'FLOWER',
		value: 7,
		luck: 4,
		resume: 'ne sait pas quoi faire de sa journée et est très peu intéressé par ce qu\'il se passe aux alentours et décide donc de cueillir des fleurs pour s\'en faire un collier.',
		death: 'NO',		
		multiple_player: 'NO'
	}
	,
	{
		key: 'FIND_HEAVY_WEAPON',
		value: 8,
		luck: 4,
		resume: 'trouve une arme lourde dans un camp abandonné, ce qui lui donne un sacré avantage pour le reste de ce NMHunger Game !',
		death: 'NO',		
		multiple_player: 'NO'
	}
	,
	{
		key: 'WOODS',
		value: 9,
		luck: 4,
		resume: 's\'enfonce dans la forêt pour se sentir plus protégé et caché par les arbres massifs qui la compose. Mais qui sait ce qui l\'attend au fin fond de cette forêt ?',
		death: 'NO',		
		multiple_player: 'NO'
	}
	,
	{
		key: 'MONTAIN_PUSH',
		value: 10,
		luck: 2,
		resume: 'pousse ** TARGET_PLAYER ** depuis le haut de la montagne alors qu\'ils étaient en train de discuter de la pluie et du beau temps. Quel cruauté, c\'est du niveau de Thal !',
		death: 'TARGET_PLAYER',		
		multiple_player: 'YES',
		death_reason: 'Poussé de la montagne par PLAYER'
	}
	,
	{
		key: 'POURCHASSE',
		value: 11,
		luck: 4,
		resume: 'poursuit ** TARGET_PLAYER ** pendant de longues minutes dans le but de l\'assassiner mais ** TARGET_PLAYER ** parvient finalement à s\'enfuir, ce n\'est que partie remise !',
		death: 'NO',		
		multiple_player: 'YES'
	}
	,
	{
		key: 'BLESSURE',
		value: 12,
		luck: 4,
		resume: 'essaie de panser ses blessures. Cela risque d\'être handicapant pour la suite de l\'aventure !',
		death: 'NO',		
		multiple_player: 'NO'
	}
	,
	{
		key: 'FALL',
		value: 13,
		luck: 2,
		resume: 'admirait tranquillement la vue au bord de la falaise. Un léger faux pas l\'aura fait glisser, son cri au moment de sa mort résonnera encore dans tous les esprits !',
		death: 'PLAYER',		
		multiple_player: 'NO',
		death_reason: 'Mort en tombant d\'une falaise'
	}
	,
	{
		key: 'ATTENTAT_SUICIDE',
		value: 14,
		luck: 1,
		resume: 'se jette sur ** TARGET_PLAYER ** après s\'être ceinturé avec un explosif. L\'explosion de cet attentat suicide mettre fin à l\'aventure de nos deux concurrents !',
		death: 'BOTH',		
		multiple_player: 'YES',
		death_reason: 'Mort dans un attentat suicide.'
	}
	,
	{
		key: 'THINKING_HOME',
		value: 15,
		luck: 5,
		resume: 'pense à ce qui l\'attends chez lui !',
		death: 'NO',		
		multiple_player: 'NO'
	},
	{
		key: 'WALK',
		value: 17,
		luck: 4,
		resume: 'marche toute la journée, sans rien faire.',
		death: 'NO',		
		multiple_player: 'NO'
	}
	,
	{
		key: 'CRAZY',
		value: 18,
		luck: 4,
		resume: 'commence à devenir fou ou alors... était-ce déjà le cas ?',
		death: 'NO',		
		multiple_player: 'NO'
	}
	,
	{
		key: 'DARWIN_KILL',
		value: 19,
		luck: 2,
		resume: 'grimpe dans un arbre, voulant observer un peu ce qu\'il se passe aux alentours. Se pensant assez léger pour grimper sur une branche, celle-ci se brise. La chute lui est fatale!',
		death: 'PLAYER',		
		multiple_player: 'NO',
		death_reason: 'Tombé d\'une branche d\'arbre'
	},
	{
		key: 'AUTO_BURN',
		value: 21,
		luck: 4,
		resume: 'se brûle au visage avec son propre feu de camp, de belles traces de brûlûres le suivront jusqu\'à la fin de sa vie. En même temps, c\'est bien mérité, comment fait-on pour se brûler avec son propre feu ? Au visage en plus !',
		death: 'NO',		
		multiple_player: 'NO'
	}
	,
	{
		key: 'DYSENTERIE',
		value: 22,
		luck: 2,
		resume: 'meurt de dysenterie. Sûrement à cause de quelques choses qui n\'est pas bien passé, quelles idées d\'avoir mangé tout ce qui lui passait sous la main !',
		death: 'PLAYER',		
		multiple_player: 'NO',
		death_reason: 'Mort de dysenterie.'
	}
	,
	{
		key: 'TOXIC_BUGS',
		value: 23,
		luck: 2,
		multiple_player: 'NO',
		resume: 'se fait piquer par un insecte, sûrement le plus toxique du coin. S\' effondrant au sol, ce concurrent ne se relèvera plus jamais !',
		death: 'PLAYER',
		death_reason: 'Tué par une piqûre d\'insecte toxique'
	}
	,
	{
		key: 'SING',
		value: 100,
		luck: 4,
		resume: 'chante I\'m singing in the rain alors qu\'il pleut, attention à ne pas tomber bêtement malade juste pour cette blague chantante !',
		death: 'NO',		
		multiple_player: 'NO'
	}
	,
	{
		key: 'CRY',
		value: 101,
		luck: 4,
		resume: 'commence à pleurer, à ce rythme on va bientôt se retrouver submergé !',
		death: 'NO',		
		multiple_player: 'NO'
	}
	,
	{
		key: 'HIDE',
		value: 102,
		luck: 4,
		resume: 'se cache comme un petit couard pour échapper à la mort !',
		death: 'NO',		
		multiple_player: 'NO'
	}
	,
	{
		key: 'MUSIC',
		value: 103,
		luck: 4,
		resume: 's\'est fabriqué un instrument de musique avec le peu de choses que l\'on trouve ici et commence à faire de la musique. Attention à ce que ça n\'attire pas les autres concurrents dans sa direction !',
		death: 'NO',		
		multiple_player: 'NO'
	}
	,
	{
		key: 'DANCE',
		value: 104,
		luck: 4,
		resume: 'se met à danser la macarena sans aucune raison !',
		death: 'NO',		
		multiple_player: 'NO'
	}
	,
	{
		key: 'BAIGNADE',
		value: 105,
		luck: 4,
		resume: 'se fait une petite baignade, comme si c\'était le moment :man_shrugging:',
		death: 'NO',		
		multiple_player: 'NO'
	}
	,
	{
		key: 'BATH',
		value: 106,
		luck: 4,
		resume: 'profite d\'une accalmie pour prendre une petite douche, on sait jamais, il faut être propre pour mourir !',
		death: 'NO',		
		multiple_player: 'NO'
	}
	,
	{
		key: 'THINKING_PLAN',
		value: 107,
		luck: 6,
		resume: 'réfléchit à un plan efficace pour la journée de demain, cependant l\'efficacité est-elle vraiment l\'un des points forts de ce concurrent ?',
		death: 'NO',		
		multiple_player: 'NO'
	}
	,
	{
		key: 'SIT',
		value: 108,
		luck: 4,
		resume: 's\'assesoit en tailleur en plein milieu d\'un champ sans rien faire et contemple le ciel, ce concurrent est peut-être débile ?',
		death: 'NO',		
		multiple_player: 'NO'
	}
	,
	{
		key: 'HUNGRY_DEATH',
		value: 109,
		luck: 2,
		resume: 'ne s\'est pas assez nourri et fini par mourrir de faim, quelle triste fin.',
		death: 'PLAYER',		
		multiple_player: 'NO',
		death_reason: 'Mort de faim'
	}
	,
	{
		key: 'THIRSTY_DEATH',
		value: 110,
		luck: 2,
		resume: 'ne s\'est pas assez abbreuvé, sa vue se brouille petit à petit et ce concurrent fini par s\'écrouler au sol pour mourir bêtement de soif.',
		death: 'PLAYER',		
		multiple_player: 'NO',
		death_reason: 'Mort de soif.'
	}
	,
	{
		key: 'BEES',
		value: 111,
		luck: 3,
		resume: 'était tranquillement posé dans un arbre pour espionner **  TARGET_PLAYER ** qui dormait sous celui-ci. Un mauvais mouvement va lui faire perdre légèrement l\'équilibre, sa main vient taper la ruche qui se décroche de l\'arbre qui terminera sa course sur la tête de ** TARGET_PLAYER **',
		death: 'NO',		
		multiple_player: 'YES',
	}
	,
	{
		key: 'GENETIC_ANIMAL',
		value: 112,
		luck: 3,
		death: 'NO',
		resume: 'aperçoit un petit animal au loin et décide de s\'en approcher. Cependant il s\'agit d\'un animal génétiquement modifié et se fait donc attaquer par celui-ci ! Heureusement pour notre concurrent, il parvient à s\'échapper !',
		multiple_player: 'NO',
	}
	,
	{
		key: 'GENETIC_ANIMAL_DEATH',
		value: 113,
		luck: 2,
		resume: 'a rencontré un animal sauvage et génétiquement modifié qui s\'est mis à le pourchasser, dans sa fuite il croise ** TARGET_PLAYER ** qui se fait immédiatement prendre pour cible pas la bestiole et meurt sous son attaque pendant que notre autre concurrent s\'enfuit lâchement',
		death: 'TARGET_PLAYER',		
		multiple_player: 'YES',
		death_reason: 'Ecrasé par une bestiole génétiquement modifié qui pourchassait PLAYER à la base'
	}
	,
	{
		key: 'FROZEN_LAKE',
		value: 114,
		luck: 3,
		resume: 's\'aventure sur un lac gêlé avec ** TARGET_PLAYER ** qui passe à travers la glace, heureusement l\'autre concurrent le rattrape in-extremis et lui évite la mort !',
		death: 'NO',		
		multiple_player: 'YES',
	}
	,
	{
		key: 'FROZEN_LAKE_DEATH',
		value: 114,
		luck: 2,
		resume: 's\'aventure sur un lac gêlé avec ** TARGET_PLAYER ** qui passe à travers la glace, notre autre concurrent ne viendra pas le sauver et le regardera mourir avec un petit sourire en coin, quel sadique !',
		death: 'TARGET_PLAYER',		
		multiple_player: 'YES',
		death_reason: 'Mort dans un lac gêlé, sous les yeux de PLAYER qui n\'a rien fait'
	}
	,
	{
		key: 'ALLERGIC_REACTION',
		value: 114,
		luck: 3,
		resume: 'fait une réaction allergique à de la nourriture envoyé par les sponsors, quelle tristesse, heureusement ça ne lui coûtera pas la vie  !',
		death: 'NO',		
		multiple_player: 'NO',
	}
]


let night_actions = [
	{
		key: 'CAMP',
		value: 1,
		luck: 4,
		resume: 'trouve un endroit où camper et passer la nuit tranquillement',
		death: 'NO',	
		multiple_player: 'NO'	
	},
	{
		key: 'FIRE_SUCCESS',
		value: 2,
		luck: 2,
		resume: 'tente de faire un feu, avec quelques difficultés le feu fini par s\'allumer, brillant de milles feux. Cela pourrait tout de même attirer l\'attention des autres concurrents...',
		death: 'NO',
		multiple_player: 'NO'	
	},
	{
		key: 'FIRE_FAIL',
		value: 3,
		luck: 3,
		resume: 'ne parviens pas à allumer un feu après y avoir passer plusieures heures, quelle déception !',
		death: 'NO',
		multiple_player: 'NO'	
	},
	{
		key: 'SPY',
		value: 4,
		luck: 2,
		resume: ' espionne un autre joueur. Il s\'agit de ** TARGET_PLAYER **',
		death: 'NO',
		multiple_player: 'NO'	
	},
	{
		key: 'NO_SLEEP',
		value: 5,
		luck: 3,
		resume: 'n\'a pas trouvé de lieu pour dormir et va donc devoir passer la nuit à la belle étoile. De ce fait et mené par la peur de se faire tuer dans son sommeil, ce concurrent ne parviendra pas à trouver le sommeil.',
		death: 'NO',
		multiple_player: 'NO'	
	},
	{
		key: 'SLEEP_KILL',
		value: 7,
		luck: 1,
		resume: 'tue ** TARGET_PLAYER ** dans son sommeil ! Et oui, il ne fallait pas se reposer...',
		death: 'TARGET_PLAYER',
		multiple_player: 'NO',
		death_reason: 'Tué par PLAYER dans son sommeil.'	
	},
	{
		key: 'NIGHTMARE',
		value: 8,
		luck: 4,
		resume: 's\'endort paisiblement mais fait d\'horribles cauchemard toute la nuit. Espérons que cette mauvaise nuit ne lui portera pas préjudice demain...',
		death: 'NO',
		multiple_player: 'NO',	
	},
	{
		key: 'HORROR_STORY',
		value: 9,
		luck: 3,
		resume: 'passe la nuit avec ** TARGET_PLAYER ** à se raconter des histoires d\'horreurs, une belle amitié horrifique est-elle en train de se former ?',
		death: 'NO',
		multiple_player: 'YES',	
	},
	{
		key: 'LOVE_NIGHT',
		value: 10,
		luck: 2,
		resume: 'passe la nuit avec ** TARGET_PLAYER **, pas la peine de se demander ce qu\'ils font, les bruits sont très explicites. :heart:',
		death: 'NO',
		multiple_player: 'YES',	
	},
]

module.exports.day1_actions = day1_actions;
module.exports.otherDay_actions = otherDay_actions;
module.exports.night_actions = night_actions;
module.exports.aloneActions = aloneActions;
module.exports.NMHE_PLAYERS = NMHE_PLAYERS;