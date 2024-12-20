---
title: BIG O
date: '2024-03-18'
author: Adrián Villar
excerpt: Explicación de la nomenclatura Big O para algoritmos
imageUrl: https://picsum.photos/800/400
---

Nomenclatura que se utiliza para comparar eficiencia, rapidez entre algoritmos independientemente de especificaciones de sistema, hardware.

## Reglas de simplifcacion

### Elimina todo factor constante

0(**4**n) - 0(n)
0(**999**n) - 0(n)

Dado que 4 o 999 es una costante, no va a afectar al rendimiento de manera variable asi que se elimina.

### Elimina los términos mas pequeños

O(n^2 + **n**) -> O(n^2)
O(**n** + n^4 + **n^2**) -> O(n^4)
O(n^4 - **n^3**) -> O(n^4)

El objetivo es simplificar la explicación eliminando los términos que menos intervendrían en el performance.

### Ejemplo en el que se aplicarían las 2 reglas

O(**4**n^2 + **n** + **5**) -> O(n^2)

### Analizando algoritmos segun posicionamiento del input N


![[Pasted image 20241217234200.png]]

Cuanto mas abajo en la linea, mas óptimo. Supongamos que N es 5.

En el caso de N ser factorial, O(n!) -> 5! = 5 * 4 * 3 * 2 * 1 = 120
En el caso de N ser un exponente O(c^n) ->  2^5 = 32
En el caso de N ser un polinomio O(n^c) -> 5^2 = 25
En el caso de O(N) = 5.
En el caso de O(log(n)) -> log2(5) = 2,32
En el caso de O(1) -> es una operación constante (la mas eficiente, lo que significa que el performance de la función no escala dando igual el tamaño del input N)