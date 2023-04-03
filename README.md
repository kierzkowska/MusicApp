# MusicApp

Strona klienta Aplikacji

Strona klienta odpowiada za zarządzanie widokami, prezentacje danych użytkownikowi czy też za obsługę interakcji z nim. 
Do implementacji systemu wykorzystano język JavaScript, a dokładniej bibliotekę React.js

Zdecydowana większość zasobów aplikacji widoczna jest dopiero po zalogowaniu. 
Natomiast sam etap logowania do aplikacji podzielony jest na 2 widoki: logowanie 
zwyczajnego użytkownika oraz logowanie administratora. Dostęp do pierwszego z nich 
możliwy jest poprzez przycisk Zaloguj się dostępny w górnym pasku menu czy też pod 
formularzem rejestracji. Jest on możliwy także poprzez przejście do jakiegokolwiek innego 
widoku bez pozytywnego przejścia etapu autoryzacji, gdyż w takiej sytuacji użytkownik 
automatycznie przekierowywany jest do strony logowania. Wyjątkiem jest widok
przechowywujący spis wszystkich utworów muzycznych. Z kolei dostęp do panelu 
administratora możliwy jest tylko i wyłącznie po kliknięciu w przycisk Panel administratora, 
znajdujący się w górnym pasku menu w widoku logowania. 
Układ graficzny prezentowanej aplikacji składa się z dwóch zasadniczych elementów. 
Na górze każdego widoku widnieje panel z układem menu oraz możliwością zalogowania 
się bądź rejestracji, czy też przejścia do panelu administratora. Natomiast pod danym 
panelem znajduje się zasadnicza część interfejsu. Każdy widok dodatkowo wyposażony jest 
w logo aplikacji, znajdujące się w zależności od rozdzielczości, na samym dole interfejsu 
bądź tuż pod układem menu. Menu nawigacyjne, znajdujące się w górnym panelu mieści 
kolejno stronę główną, quiz, czyli widok prowadzący do instrukcji i odbycia rozgrywki, 
wyniki każdego indywidualnego użytkownika oraz przegląd utworów muzycznych


Frontend i backend aplikacji postawione są na dwóch różnych serwerach. Serwer, na którym postawiona jest część backendowa wymaga czasu na 
połączenie się z bazą danych i z niezbędnymi bibliotekami. Po pomyślnym przekierowaniu na utworzoną stronę aplikacji, automatycznie wyświetlona zostanie strona logowania, wraz z górnym układem menu.


Strona Serwera aplikacji - repozytorium MusicApplication


![image](https://user-images.githubusercontent.com/58340006/229567434-cd8e44b9-e32c-48af-a31e-4d4da1abe0f4.png)


Interfejs aplikacji:
