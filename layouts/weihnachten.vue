<template>
	<section id="weihnachten">
		<nuxt/>

    <img src="~/assets/img/kliemannsland/Kliemannsland_Illus_Weihnachten_Fynn.png" id="fynn">
		<img src="~/assets/img/kliemannsland/Kliemannsland_logo-schwarz.png" alt="Logo Kliemannsland" id="kliemannsland-logo" class="absolute">
    <img src="~/assets/img/kliemannsland/Kliemannsland_Illus_Weihnachten_Kugel.png" id="kugel">
    <img src="~/assets/img/kliemannsland/Kliemannsland_Illus_Raketen.png" id="raketen">
	</section>
</template>

<style lang="scss">

@import url('https://fonts.googleapis.com/css?family=Lato');
@import url('https://fonts.googleapis.com/css?family=Vollkorn');

#weihnachten {
	width: 100vw;
	height: 100vh;

	margin: 0 !important; 
  padding: 0 !important;

	font-family: 'Lato', sans-serif;
}

.absolute {
	position: absolute;
	height: 3.5cm;
	width: auto;
}

.subline {
  font-family: 'Vollkorn', serif;
}

#fynn {
  position: absolute;
  height: 5cm;
  width: auto;
  top: 1cm;
  left: 2.5cm;
}

#kugel {
  position: absolute;
  height: 5cm;
  width: auto;
  bottom: 1cm;
  right: 2.5cm;
}

#raketen {
  position: absolute;
  height: 5cm;
  width: auto;
  bottom: 1cm;
  left: 2.5cm;
}

#kliemannsland-logo {
	top: 1cm;
	left: 50%;
  transform: translateX(-50%);
}

#kliemannsland-karte {
  position: absolute;
  height: 5cm;
  width: auto;
  bottom: 1cm;
  right: 2.5cm;
}

#kliemannsland-huhn {
  position: absolute;
  height: 5cm;
  width: auto;
  bottom: 1cm;
  left: 2.5cm;
}

</style>
