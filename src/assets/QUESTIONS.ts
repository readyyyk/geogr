import {PureQuestion, Questions} from '@/types/questions.ts';

const QUESTIONS: Questions = [
    {
        type: 'quiz',
        title: 'Рыхлые осадки по мере их погружения на глубину озер и океанов теряют воду, отвердевают и преобразуются в ... горные породы?',
        options: ['Магматические', 'Осадочные', 'Метаморфические'],
        answer: 'Осадочные',
    },
    {
        type: 'select',
        title: 'К макробиогенным элементам относятся:',
        options: ['Сера', 'Железо', 'Фосфор', 'Кремний'],
        assets: [
            'https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Sulfur-sample.jpg/1200px-Sulfur-sample.jpg',
            'https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Eisen_1.jpg/250px-Eisen_1.jpg',
            'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBUVFRgVFhYZGRgZHCEfHBgcHBwcHxwaGhwcHBwcGh4cIy4lHCEsIRwYJzgmKy8xNTU1ISQ7QDs0Py40NTEBDAwMEA8QHxISHzQrJSs0NDQ2NjQ0NDQ0NDQ0NjQ0NDQ2NDQ0NDQ0NjQ0NDQ0NDQ2NDQ0NDQ0NDQ0NDQ0NDQ0NP/AABEIAMIBAwMBIgACEQEDEQH/xAAcAAABBQEBAQAAAAAAAAAAAAAEAAECAwUGBwj/xAA5EAACAQMDAgQFAgUEAgIDAAABAhEAAyEEEjFBUQUiYXEGEzKBkaGxFELB0fAHUuHxI2JzshUkNf/EABkBAAMBAQEAAAAAAAAAAAAAAAABAgMEBf/EACQRAAICAgMAAgEFAAAAAAAAAAABAhEhMQMSQQRRcRMiYYGR/9oADAMBAAIRAxEAPwD1bYDT2LCoIUQO1WKKsFUQMBUopUqAFULtpWG1hI7VNTUqAK7doKABgCnNsVOlRYEQgmetMqAEnvWR4v4s1i7bUoSjyCw/lPT7VqrDDv1oHRbSqFp56RUyaQyOwc0yA9akTS3CmSPSpVF3CiSYFBQxYcVOs29og7rcVyI6A4INHq1AA+u1a2gGbiY/NEI4ImqNUAYUgEGr0QAQKAJ1GnNNQSKmpODGKQoAakaVI0AA6bxBHd0EyhzI/bvRdQ+QoO4ATVkUwIxTEVOoxQBAioMtWkVEigRTspVbtpUwLxSuXAqljwBJpwKE8Q1RTZ5C6s0MR/KD1IqRhVi6rqGUyDwatqu0oAAUQO1PAoAnTA1B7irEmJMZ7mo37oUe/AHWkUTW6pJAIJHI7VOuO1Gnvaa6120GuLdbzgn6T3HpW3pPECoAvMqlvpzE/Y0BRo3bQYiQCKfaBFc38TfE/wAmw72ALjqYIzA9TXLaL/Ul9gFy0Gc9VMD0xSbotccpK0eoExmnBrjfD/ji3cupa2su4ZLdD2rS8U+KrFgHe0sDhVyT9qLQukrqjavbYkmI68VmeOeKppkF1gWkgY9azr7jxDTMCGtyZGc44OK5V9ad/wDDai4GRQArHow4k0NjjC/6PSbGqDhSp5Ex6VHU30Ym3gk8j0NC+D3E2KEIYAfUINO+tQOWCggcsIwR0NMiiVrQMjKVc7QI2dKNvIQCVA3V5Rrfjq+ur8jD5e6NrcR3966/UfG1gJuh24mAcd8mkpWXLilFnThQYLDzD96se4F5rAfVW9VbD2bhBQg4kcZg1W3xEPmC1sLDb5iOh7RTsnqzpC2J5qKOSJiPSsnxPxjT27atcfYDx0PtV+n8b07W1uC4u1oAJMZNFip7NKKVRS4pEg81ALBJLYP6UwLKjuzFOx7VXaeQcgx2oJBEe6LhDAbIwRzPrR1C2bjuXV12ifKe470UqxTAemp6agCJqJqRpjQBGKVKKVAi+kRSp6QyJNVLZJYMSQRIgHBrG+IPC71y7Yu2n2/LJ3LmCDHT7H81qnVEbeD/ALs8DvQUX6iyrCGE9fuOKD0j/MHnQoUJifxIPtRyOGEg07AcEc0gA00JXhzG6YPWelZfxF8PG+yXVcq9sHaB3Pv7Uvi/4g/g7aMu0szQFPYcnHbFcpof9Q3bUW1uKFQ4aB1PBJPFLsro0jCTXZGP4j4frFe4juVW6czGYjrWMvgbi4qK67olSM/aur/1N8WJe2iEbSu4EdzIrzpXcndvICcEGDUOWTr44txv7OqfSXrdy3euJCzkjn3q34k8JZnN6y4dCJJmYPWuROovOom4zDoCxge1aGnlE2hzB+rJj2pOSLXFK7s6nTeJ3jpF2MwdOTOGX+1UeKixcVGZiHxvAGB61gaa8VSWJIOBzEeop71x9owIPTp+aXYa4Es3/hqLrF0sixdJJ5zg/bvQSeMXVJBdwrGYBOSax31J3iANqzB71vWtPIVjK4yPfjmk5M0jxRqgV/BlfzsxXrP/AHWld8cD2fkIF2gwXAyYrP8AFtfuXYTEtt2gZCgZIg9RWMLwVhC7V45yR3NCbCUYtq0di/xAVREQbHXG5T9XvFc5c8Wuo4uLchuRBnPc5/SqnKuAhUr5omYMRM+oquwlhDBbeGnoIwOJ+/Si72T0SwkdHb8bua8qNRtVV3edVgYExVF5lVlgSiGSvEgf1rH8R1KoBbQqonhZkjkyRwOKFbX8+y9cAiST+o/FO2xdIq0exWHV9Lvs3igbvypPPPFc58U+P6lVTTI24wJdeW/Fcv4VqgwKtdKCPKCTtJrW+GvDLt64QHEqQR1xPSrUrOX9NRts7v4S8dm1bs3t4uBYJcRJ9+tdNptMqTt6mT7ms/Q+FQmy5D/+xEGtdFgRWhyvY9IUqihPURQSOaYinpGmBE1E1M1CgBqVKlQBVpdWzO6shQIYDEiGHcdqjoPEkvqxttIVipPqDmpa4ow+WzFS4IBWQcZMEcUtFoLdhYRQoAyeOOppAYlzxTUWdQ4vJu05+l1H0gx9VV/E3gC6kI1q4bb7YXaxAZT0IHIzT2/i/SXnNlpAY7ZYeVpx+PetDX6r+GsFxb+YUGFTnbMTngDFK00aNST1TOe8D0Gp0N1UZjct3B5iSTsI7TwKv8Q+ObVoXCri4BhY6N2J6j1q9fiNF0nzNTBZwf8AxxDEHG0D7ivMfFtUtximmQfJwYIjMTBJzg4qZOjXjh3lkB8Z8Xuam4XdyZOFkws9FHQUKwZzsSR6ngetI2GH1YJPA/vT/LMGfKZj7CsrO9RpUjT8StOqIl0h2QeVgeVPCmsO3ZIMgST0JwPt1om3fJYop8oGSwqw21Xzwe0g9aG8jjGkPodF/M2ROBxn+1W6dCzkHgcdBS1OpKgeXcWO0D8DHfrQ+p1bglAsCIPTPv60tl4RfdtF3Ev5ZwB9hQ2puO1zZOxBO0nOB1HertHZdmUMRByw7CONx6cUadMhJ2mTBl8EwIBAB+nmloKtAqWraWw4XeZ+pjAxxAHJJ6TVyPcfLvAxJLALiOOp61R4i/kKA8Z46yAoETkiefSgVW5eWZAUHaJn+XBgLn8+tOrE3WDT1Pilvzm2ATESeTxwB05rARXe5tX+Y9TMd6ts202kSCQJ3TA7QJ5/5ojw3RGQ7kIsfUfXsOvWqVIl3KjoLfhdtVXd5ngjk5x0AP8ASsjUaNA6HdAJMDkDqZJ6z/atB9faVFCSQzAFup4x178dKG8QvWg67baRmSuTjrPQCpTZTUaK9QiWwQqjcTG5lksY3SOw5rHe/u5Ak5MCB7xWpbCup2kYONxgrJjAx0ig7nh8GC68FiR25PGD+apEyvwr0mqg+mSJ711fw78RfIcEj6mUEjO1ZExXMabQSC4dYHHefUdKsd2RZgcZYxz2x196PcEOPaNM+gbfj+mKb/mLtAyZ71fprrM29XVrbKNsd+8187/x77F8xZV4A6VrfC/xZe011PMxQsJQny7ScwO/WrUjkn8elh5PoGmYihNJqxcMqZWB+uZnrTeJaX5q7NxUghgQYOK0OYLpVC3wMz61I0EjGmNJmzFKmBGlUqVAEmZZExPSgfHfE001ou6sy8Qonmeewo4uAQCQCePX2pPtYEET3EVI0eIXfh68bm9W/wDHuDI3o2VB9pitzwbxrX2dSbV0b0f/AHdBxK9h6V0Hxt4ld0q2zZ+WqPIgiWB5kDggCvK9T4zevXmcdjPIAXrH6/mobSdI6oRc1cj074h+INMifKZBdfIeMBJEzuI9uK85fVC2suOcjHUnAoUO7gJajnzSREe1U692B2EliucLI4/5qJNs6uOEYppbKdTeZmZxKyeJp9BZLEsWOP16mKAbVHJPOY/6q3Sal3TYuImW9Cep4pUX2V0aiXRtZyQdpiIjnv1JpOzBDEMR1kALJ6TyefxQlu3uO4KPL9KiRujEt05rTCIPLAYkiSxHfJjgUi1kG1FtvL54Ig9YEiPzVei03mYGW3ZBKxEGPY0RqWVysDkjuDgcGR0ip33Hk27sfV24H1E8D2/rQOlZbqALaNCSSAIzMd2PQT0FN4Iu20SRuJjHXIJg9Z4H4ocg3Eb5hKKxlSWnyxiAOPvUNIQyFbQMjzFsqRyAT0Ix/k0Vgd5snr23OE2SD0n/AGzifTNAv4k6qFR8yTMGQCe/QSf2qzR2t6uz5PGTiW4M/en8Pa2iOXCnI5AMgjCienWhEO3oE+a6lAR9REsR3OZPX3PrW7cgFiW3CIEQMtuzB4jge5rDVGuyygAg9ZgmZgKBwO44gUZadgsMFBDbmyJMcGTwBNNhF5KdZqAGYyRB74kwD7dPxUbWn+YxhwIHOT+aD1N9ZPWeR70Z4V9BJWFmOcnOBHWjwXZOVCXQurlHMoM8Az+sijL+ltgFnIUOBtKn0+kKB1xyaDu3fPvaOwVjwZHbpFGai4vyipUETzJyRBnny0ZBJZBFYIG2cdOfLHUzUbd8MAH8xPMf19aHtuQQFJyeScVPUEkHoRHuZzPFMVll1oeVyoGOMjmrNPqQm1liQQc5HPFC2Zb6gOMGR2q9wm4EjaIyojPrQJ6PW/gb4me/bdNiF7cEKDt8px/Q13KPMdCRXiXw74Vqm2vp5QODFwYkA/3Fev8AhRufJUXQC6rDR1IGSPetY2edyxSlg0lNRdSRAMevasfQeKu0BrDrLkNx5R0Y+9bU1Rk0Vu21STmB05PtStvuAPenRpEkR6U8UxCpUqVAHAeGeB6976/PeUtPvQ87t2SQeR7e9egtxtJyQff1isvXXntOr7V2ERcdn2hQuQVBMTz9hXnHxJ8Zo+qQpfYWrZ3K6KQZI4YHkdOOKhtLBsoym7MX4+1ly9qQhR0RBsRXBHlUmWkjrz7RWZpfDbz2HdF3BB5iBwDmfXFams1d3xO8m8qjOdiNkLAHees8UrunfTB7COdjjzjcDlGgnHGVOD0qK+zqi2qitnOaayygu8ARx2/5mjb91NoE5J8x647/AIqXiFuyWdbbMyAfU8CDGYHvFBPZZQdq7zAjAAEjuTk1DydMXSM3Wld21eP3rR0VkBVXnMwJJluMdTih1sJvCuQQMkoOwmJ/SjbRVQGURJ8oPJHSZ/ahvAoxy2FvbRASQYnEkEmDuwOAAZ6VnpaFxtwZlktK8gAevUyR+aWr33LhVYx34C+pjH/NW6BFFtiXkmRCzyYM8T0A+1Ip5dF9l0ZJyFU9c7icjsO36Vfp3+cGIwgMIuRugyWaMADjHWstUYh0QYWD5uQT1z6CiPCwVVVU7txIJLbQpOYXB3H+4ooaeaLfGHZ2WzbACqNzEkRxEH+1NasE7bbztUDc04iJIB47+uagtuXYs30gl3wBIACqvbk8jNI3iqs0PtuSSZGEBETHAIDf3oD1tlWt2LvsokHG0hjPTn1zxQx0qoVJJZgM56wCTg9KO1CbMjYGI+omTEYGeD+emaGWwgYmSCCDukQCPQCMwaaJayaHiviDJIWII9QRInArG0ds3327gAMsTjA/ep6tTcJO6SRIVZMnA+1GeD6VW3bk8jQAeCSFJIBOYmOO1CwgbblXhnNYRHiQ2YxmZ4960tRCrHCnB5hDg9OD3PpjmpajRIrb4ROq5LHEcDA75NX3DbGyWmD9EgiDwD6ZyaGwUasr1qJOI2lQJM5kCeaGGn3yT5RwpkmTgTGTGOfam1gDmJACyMlZMYx34pW9SimRuJVYVTHJ6mPWjI3VkRZtr5R55GffGO4EzVesIX6sueo4gdIHWm+cqo/l87tMjG0dqBV5MnIpohtLAQyQC3WcdAc/vFSZydvAOefXvV2guMwKDbtzkkzB6QOf0q/U3Ai7TECPc9BA5FAeWEeHeMX7e027jrAO3aTEckAda9u+GNe93TI9zDlfPiM9THSvDtNbXaHQlCDuXIyf8mvQPgr4tRlNrUGGJIVj1BP0kCrizm+RBtWkekVgP8XWl1A0xR95fYOOZAkyZAz+hrcsuCAVypGCOI6Vk674ctXNQupOHUCIxBHX1rQ41XpvTTVkPdL3RZ3OjJDhhG11mCtajvHQn2/emSTpVGaVAHKeO+O6C/ZW1euHzqtxQqkkDIBmIBBBFeP+L2LO9tjvt/l3BZK+sHBrs/Hvgs6TTG58x7m0hYyNiFucdifbNef64KW3A+n46msZN2ehwxj1tNmhY8QX5aWAu0K+8OZkdDgf5iqd5ZiCxjksemfcx+elWfDvhh1NzZ/LuEkcxBgHsp/tRHjPhr23Nq4ux2hto4IJIB9ueOopNOrLhKKk0jLW6S4VACOp7+pPap6m45VlCmOZE8dsCkl9UIRF3mYMSN3oJz05raW+GRlkrAEgHI7AbZ/FSzVWc5pdKwl2WFx1ie49RWuiKQpJWemfKDE/pig7uuV5W3vYBYLEdZxz96Ku3UtKuJMCDEEAdx654ihhCqKQR5gCqgqSCCTkHqT7mim03yrQUQWiSWMBSRJIA554zWWhBuAqw83PGNx49YHatIozboEsIHmYEyJAJHCiKTKTshqNzou10G8ebkCR2JycdIorQ6hVUOdotqYBiTujaTn0An2iqNJpVCKCwOSCVBOQx3Dzf2rP8U1asoRVCqogD26+nf7mj+B3SsPewGd/OCnLJLSY44wo+kd/0qnU3yiquNsQoOMZgt1iAOTT6O0yIbrw3lBUTmSck9sfvQniGs3PBwOonjrGPegVqrLr11GCOykhVWVE5PEHsARx1ihnvrPlEAlSZ4AU8wemTRGg0ZuiZhFkYjc0ZAWf1NW6nRpbUMSCeiyJk8SR/amKm1YQu1I2oAGwDiecmffr7UVcMW/qMx0IwBkAQe0Ak81kLdeH3LAJBgx5eoEdahqVaEWSJGRuHPcx9v1pUVeCBZtgVfNmdx9eZPpTae/ySO3AxIOJFIWGMgHHHNSt2SV3EYU8AjI9aZOSkAlixAPX7k+vNVupZ8ckft3q65dAICjIHI7jrQjuw80YmJ7/AOTTRMqQrecA/mrtLpi4IA3ETJ7YqqSfMv2Har7ClfMrAGM859x1pkpF+mVAGLHc0wDkRGYwc9KBKhnBP0lsj2pra7iZmScqOs0a3hyyskIIzJ3eaT06YjHpQDytF7axZ2L7TzA69P8APSivA9QLd5HZhtQhtpHOYgH0mftWXYCAGDnr2+xrQ+HfE1s3ELqjW2IDhhMITkj1HP2oQptuJ79oNUr20uIZR1DDETIng/tRTPAmD9qzNNptlvajwMFSQCAuDHtFaKTAkyR14mtkeYxndg6gLKmZacqemPXNSa+gYKWUMeFJAJ9h1p3EgjuDkGCPas5fB08m+XZDKOxJcEknJ680xGpSpopUAcP8L/GT6i5/D3kBLLO5RxCwd3QyZPTmsLx74Z098PqbV8bEnyBUSSc7QxIBkmAescmu+0Hw7pbd5ntJtdRtYAMFg+bE4P2rG8T8f0/zjoLmmubG8u4oFXnBUYJQHO4fioavZupZuKo858C1zaN2A0xLnJUvBC/+3SYP6iqviPxfUapldyi5gIstsUREc881tfHGk0+nvKltGaB55PEwyBc8QeIHA5riruo3NK4CnIbqScAfg/as23o64RjSl6wvwjTgM/mJgCTAkEmSB9vWr2uKg88LumLYyYPUx1P96o8PZV3c72B27cEdTKmcRHUf3xzvktDH7HrxU0bXSC7dxkJCkbZkqF5n+vFE3LzheFXeRMncRgnPrnjjisoO24lgBB+k9aMsDeFwQ08gcYJ54+3qKbRMWvAzw1IOGWd2SOwkxAPp1/7J0rqHdlbcxBGO4znpmh9DbbMqRBhMBZ4mfTuYq3UfRCKQMSBHToe5n9qlmkdD3/FkCgNBxwO/YxxNYdu0HYtwCe3Q4xWpc0QG4O0MPKAe4g7iRjuM9qjYVLgRhtXZG6ckziBAxJJPamsEyTbyW6m7OJJAGPtP9jWZ8nzS8DkmcwDkT+a0vEr21tgkEsPqI646AQIzFUeIhFfauTwSZoQ2i/SEbUGdoAI2jBYnrHPX2oW66SxcnJwBMjg8/mitOzMEQGJgFQJkHDebtWprwgQp3HA9cTS9HTawYS2VaHD9Z2NJGP7xULbCWZsTJjjA7etSv7QoVQAw8pOcDGZ/FQ0yAMs5PeCeO3vIpklupbbCEMDCmIiC3Tnt+ZqzS2y+9QYE5Geo6VCXdtyiTMbvWMxngCivCTBhj5oHOJBnIoY1sHuaQI4yJJjbme4j0NPq7h2DAgHIPc+nfM0brULNO6FU4I54AyfuawNQmSRkA9e3+TQshLBKxcPmLD79Kt2YMLMiQxMDvweaoRQe5WBj1qZ3OAAOIO70E8imSngs0llid8nyxgd275qnX3GLGVI9f6fiidJcC7p6MPf1OOv9qv1WrQLtA8sZ3SSSeeaPQr9uzMtMYxx1/wCPSla9BM424yZxikl2BtjH5xU7dvOOTED9qZHh6f8ACPi6WtLcW7e+aTj5W6HUFQGVCxz9j7V6H4UV+Um3dt2CN/1RAgNPWvDPCPCbr3VDIVWQSSOBM47/AGr3bTMSontWkX4cPLFLTCpp6iKlVmIqVKaVAF4xNAeMWXNt2tKrXQp2buN3Ssjxbxi+upspYTfb3Fbz8wf9o9uZ+3etm+pdlCvt2zuTB3blgbhzGanZVUeFeJ3Pm3HZyyOXJcwCqsWO6ByM+/Wsy9pNhKs+fNH80jocGOk17l4x8L6drDLb09tnVTsUjaCeQpIIxXnN74J1a7rrpt28KpLluwAUEwCTWbi0d3Hyxe3RyVveQdqjIhMiQPc9ePeKc3HQOLi7G3DBwI6z7f1qBRwVR9+7fG2IAUkDgiZ5/FEeIWjwQbjwRLEnYE8smc1Jt2d4KtTqkZW2ruxhiMT0yfWr9JcVEO4DexzjvEewoTaoVtyjasbV3TJiBxI5qpdSxUKsy7ZAH1MT3jgTED1pFJ1llt3xGNwAU4AAEyvEkEelEaK0rCRvVVJyTyYAiMEzJ5qhmW2UUCDyw2ZMfTk5OelQuI7MCxKqTnMTAyAPuc0UFu8hapbcjBZ3EyYyeCYnaABmk9hArsshREtuBymfLjBLQPSKfxHUKjqiQcbSPePKD0z1is/UZXYG3FWY7VBCxznvn9qEht0EoNzi46kmCQCcEbee85FD2rO54nceevBHrzVq6V98IOYEAgmIjr0EE1bptONxEeb1mY5P2EjNAJF/hVnzEhp2E+b/ANSMYbrMig9fqyGwBHAg85Jk9+adCuUQtmACcFu/PqaH1OlYMBIJiSdwgehNA28YKXd26c/j2ptOpZhJiMiiH02xSZwwjdHUdu3vSRECBtw3cQJPv+kfrTIp3kmzOCpAjEc4ho+o96nZYW3Qu04jvGfL69IqCbTuBaZifYTj9qlq0TaWO4t/tjA4ge9Ip/aNTxLxFNhVBPIMDg+v6Vg6dN/lJjr9u1SElTmBxkx5iJ/SnHlQBcwTPcnP7UA3bBgNpPeO3+Yq7e4KyIniMT6f91bYUwSrAs3TnaB/nFVXLhRzgH/bP7wPamRoZU6GMdfvxNU3LhY546f80rrN1AE8wO9JZLBTgdM/5FMTYRZswJnzTgEc96t8J2pfRnmAQTEH756VVdv/AMq8nHP+f5FdN4L8I3LgRi8H+ZSJwenvFCsjklFKmdZ8M6q7e1Fy0flPYtyMCGC8LtjkYr0KysCKyfDfDERQFQJAAlcHmYkdJFbKLWqOCbTeCa1OmFPVEDRSp6VAEtome3TvMf5965234Jea+9x7kEXAyOmGNsTFt45XJrS8c1b2rLtb+sKSpKsyjaJO4LXF/FvxdbuaNRbc732l9oICwMqx6GSPLUN1k144ylheneafxOy5KpdRmBggMJmgdT8S2E1A07b95IE7TtG4SPN1k4xNeHeGeNPY1CXkCu4OAZghsEGPevS9B4Reua0ai6iPbbzB1MbWAEEqeT0n0oTui5ccYt2/DpX0dnV22LWAreZR8xMggkBsZIODzXjnxB4f8h3S44LKYJSR1kATA/zrXvyiuO/1A+GTqUVrVq212QGdsEIJ/OTUyjY+Hl6unpni+gaTG2VPJJknp9hnpWjf1gsptVRJkHAAH9zXb+F/6eC3bNx/O6oxCEGC4krEHPTBrjPF/Dr4bzWWQORtLAgAtPl9PaocTrhzRaZifxYndHmnGJx61a+rcbCVMSDJGD7frROr8Aaw6/MmGjMdeoFH/wD5gG2bDWkhDIcCWMTHOAeOKKQKTlTWjDvqC0k5ySeeuMe0VLTKcqqGCJE4JzM/b+1dDqtLbawXAWQkg4ByBInkfmsRtSqgKMEgDAyZjGeemKRq1Tsu07MgLusdjwYJP9IFCafUMXdo5BCzj1memATV9tH2kEeVmkTkhFnBJPSetF624V2QYMcQNuRgGM4x+KNAn2VoznZEVWIDlmBLDpB+kdRAn9Kr1dvzEqOMmOKIvoBvffLbYCnPPJH61Pw5kW24gFxJmJx0joOtAqzQFatb02zlfXoY/NWkKtsKVgk9esHn9av01hXYXBggHjEnuR+v4qWodQACJVQSGJEmSOg54osaQHpbLAkYULG5247yP9xPFW2ApBJO7IPQfkd4BND6i+7qF53Hgenf7VUqHaNpIkwWOO3FOiU6CHuqztztAgft7VYGC+ViPNgHoD79j3p7NvytEQoiTPmPJiKVy2GGBP2/AM0igbT2/OeQCfyPt60zn2wPwScUQtt2cFVkjhR07zj2xSTSlj5yyDqSOM0zO1QLbUOSGkD9z0/rWja09onaQSTgPJ5iYzg8Vv67w5U067HR0TDAuFYsSf5Tkis2yw3J81QUBG5RzEHiOs03gUcptk/C/CLT3kDg7WPTBmOvpivVfDPDgmxEQ7IMvuyIIIEHJnOa828JREvW3G9lLARuB2lsekwT1r12y21CVG5lWdgOTgwPvBqoo5fkPKDLdsCrkFQ09wOoYSJAMEQRPcdDVtaHKOKemFI0wGilT0qAMj4u0V69pzbskBiw3SYlRyPzFcX8P/BNxxcTUgqhgKAxndzu7cYr0mxcLAEiJH3B7VYjTOIgxmpcVdmkeRqNI4i//p3pygVCUP8AvABMds1veC23sn5D7NigLbIbzsAD9S98Tij/AOKb5xtm22zbuFyQQTOVI5B4qrXh1dGSwHmAzhgrKAR3GRE9aNCtvDMf4r8f1Gmu2Vt2wyOfMxBPXIxhcfv6V0aakEITjf0zzE4rmdH4c9su9y2zob25FLF2QHylwT+o6CuqTb06jAnmO1CHKsJE/ShtZoLdwqXQMUMr6E4ry+1pNXa1wco6qjksS5YG2SZgn6hB613Oi8UGuQ/KZ7RVpV8ecLzjt0pJ2hyh1eHj7G1ujsX1uWjtcph1WNyk8c8GK4rx34SsaZN5d1LNA8u8sTmIHsa9G0PhCW2ZwPO31MJG6Op9fWpa/QWr20OJNtg4g5VgMGB6UnGwjNxeG6PD/Efh3UoPMG+XMg8LB4kcjpyO9Zt1VRlMgtMCcgQIkdq+iGso424MjI6x+4rhvG/9O7bsjWW2QcyZweAJqXGtHTD5KeJHBeGsjJcR8bIcMg3EGQCuYwRM1Vq/BNQy79lwpEhzAkHKnntiK7d/he7oUa5aHzGOXaJMDMBeoOQfetVPG/mWUVtM+x1IulVI2KQQCo65g+lFfYfqu7jps8g1Fpvo256ZmAOST34pfNJTYqHdABAzmevvXpev+ENJYRne4RvkK+WInIMDpgUf4T8JadNNcNi4X3iQ2DDqJgbcycSKOrLfOqtHkb+F3lHBaegOB7T7VRqtD8sKXclmiVXMDoAeprf1OqUCWlSMdj7R3oFGDNvghoMTwnQR6nmaizfqtWBaWwx4xJgKeu7rPP2o7TackujACCMc4gjr+wqoKQwKAyMyJMnufStG3obrL/ER5es49MU9i7RjhgXyQGO1PKmWCkk5xuafWDR3g/w+Lt5URyFENkyOePei/CNWhW8hWWIENHMRIx17Vp/BOsUa35QQskHzf7SMzjnOKa2Zzk1F15o29b4Ut20yaXabiOFeTtKwJJGROf2NE6b4FskS5HzipLbTI3t/OFPFdkuiQEso2sTLEctHf8Vxur0eoTxL5iBgjZJH0spUDafvmPSraOOMrTSdVn8nnfi+iZL3yX8pBg8ie5B6+9Z2oeJUCO/cn35r2z4j8Ka7ZJFtXeBgmI7sDz9q86T4L1L3gGTYhaS8gx7VLjR1R54uNvDL/CfhPUFEcMGUbSIGfqB7+1eq6JYUdOn4xVWn0RS1sQwcQ0Tn1Bo9RVxjRxTm5bGinCwIp5pGrMxqc0jUTQAppU80qAHEz0j+tWVBTUppAC+KaVribVdkMg7licGYM9KE8K8ds3mZEfc6fVgge471rRWXofA7Np2dECluYxR6O1WTWFYfiHg+7Upqd7+QBQg4yTn9TPtW2Kc0UCbRA2geRNU6KwqLtVNgH8oAj7RVeqt72FsswAAYxImDgFv6VLWaV3QqrlGkFWXkRGDPI5pDCbpgExMZgcmOgrN02hU3P4mGR3QKysRwOJAxPFXjXKrpZdiXZZnaYMYJPQe1EXdOrAggGRGR2yP1oC2jjl8FOl1L6t9RKw3lMAkNmM8nit7wXxi1qlV0VuT9Qjay8kT33ciub+K/B9ZqbiAKgQIQYcxk5PHXFPoddfsWmsm0bfy7ZIcDdLg+WCMEEc1KdG7j2Sd2zuHErg5PBiYnrXLeI/DN2+jF7g+ZtgbZRWYGfOAczge1S+DviM6m028/+RGKnhd3VY+2PtRviZfUaUm3uS6CCADkMrQRIxHNN5Rmu0XWsnNa74Y1jWgC1o7BCCCCAehbrHSawPDtbqfDg1u6p2OxaVaCTAEhvsJEV6lpzeOn4Vb23qJXfHUDpNZfjvw++rtW1dlR1YM0KGBPWJ4qarKNVy3+2VUcpq7Wj1Nr+PdCjTtZAYLsCIIOOgJ9RWf8WeDqbVu5p5hyNwA6EblJgY4Oa3PErLOl3SppiHRhtk/UMjeBx2/NdX8P+Gta06W3yQsMMH/O1FXgO3Wpe/V+HD/BPgAgPKv36/b0rv38MtsjIUBVhBHSloPCLVmdiBRMwO5waLuI2NhA83mkTI6x2PrVJUjGU+0rPJ/H/A20jgAEJPkIPrME963fgbXB2dWQBhB3wAWJyQf8613Gr0qXFKuoYHoRNZWm8DCSUARoxiQD7YkelSo07NZcylHq1n7NRwzKdp2t3gGKzNT4/aS+LLqQTEPgrJ4nt0rXtpAg89TxXB/Efw/fN93tkFXzJOV+3XjFU20sGfFGLb7M7wMImkUFBeHqxQB+YE0coAqjMUU1Jm6dTxSpiFTGnpjQA1NT01ADUqU0qAJLUxSpUAPUqVKkAhTrTUqAEtMlKlQBVquRVfhrEoJM5P8A9jSpUFeBT8H2rE8Ecsp3En3M96VKgaPM9Kf/ANlP/kH/AN69j0nFKlUQ0b/J2idr6R/nWraVKrOc5W9//TX/AOP+9dNSpVEffyXyefhEqZaVKrMhGk9NSoKHqphSpUEiWpilSpgRFKlSoAao0qVAEaRpUqAI0qVKgR//2Q==',
            'https://itekcorp.ru/upload/iblock/17c/kattm765cyu3dr6zvjkleggid6zbfk78.jpg',
        ],
        answer: ['Сера', 'Фосфор'],
    },
    {
        type: 'quiz',
        title: 'Области аномального проявления свойств атмосферы, литосферы, гидросферы и глубинных недр Земли, которые негативно влияют на растения, животных и человека:',
        options: [
            'Зоны загрязнения',
            'Геохимическая аномалия',
            'Геопотагенные зоны',
            'Зоны тектонических наркушений',
        ],
        answer: 'Геопотагенные зоны',
    },
    {
        type: 'quiz',
        title: 'Какие волны вызывызывают галлюцинации у человека?',
        options: [
            'Инфразвуковые волны',
            'Ультразвуковые волны',
            'Ультрафиолетовые',
            'Инфракрасные волны',
        ],
        answer: 'Ультразвуковые волны',
    },
    {
        type: 'quiz',
        title: 'В Беларуси отмечается полегание злаков. Из-за какого химическа элмента это происходит?',
        options: [
            'Недостаток йода',
            'Избыток бора',
            'Недостаток меди',
            'Избыток серы',
        ],
        assets: [
            'https://root.tblcdn.com/img/goods/4c793938-d71a-4fc3-bf2a-49c997a2f57c/1/img_0.jpg?v=AAAAAAorfe0',
            'data:image/jpeg;base64,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',
            'https://geomineral.ru/wp-content/uploads/2021/10/copper1.jpg',
            'https://www.pesticidy.ru/ps-content/active_nutrient/pictures/401_content_page.jpg',
        ],
        answer: 'Недостаток меди',
    },
    {
        type: 'quiz',
        title: 'Какая функция литосферы отражает ее влияние на состояние биоты и безопаность проживания человека?',
        options: [
            'Ресурсная',
            'Геохимическая',
            'Геофизическая',
            'Геодинамическая',
        ],
        answer: 'Геодинамическая',
    },
    {
        type: 'select',
        title: 'Выберите верные утверждения:',
        options: [
            '75% случаев цунами приходится на побережье Атлантического океана',
            'Осноная масса многолетной мерзлоты является реликтом ледниковго периода',
            'Фосфаты являются основными загрязнителями водных бассейнов',
            'При биологической рекультивации разравнивают отвалы, восстанавливают плодородный слой почвы',
        ],
        answer: [
            'Осноная масса многолетной мерзлоты является реликтом ледниковго периода',
            'Фосфаты являются основными загрязнителями водных бассейнов',
        ],
    },
    // new
    {
        type: 'quiz',
        title: 'Где проходило Гоби-Алтайское 12-бальное землетрясение в 1957году?',
        options: ['Китай', 'Монголия', 'Россия', 'Казахстан'],
        assets: [
            'https://imgc.artprintimages.com/img/print/philippe-hugonnard-china-10mkm2-collection-great-wall-of-china_u-l-pz6ywb0.jpg',
            'https://cf.youtravel.me/tr:w-400%2Ch-400/upload/tours/35274/media/339/f9l0cdu7y41godi94tl4q3lnz87f753d.jpg',
            'https://sochi.ru/upload/resize_cache/iblock/412/750_400_1/4129d0097c123f3ed572fc98e4942186.JPG',
            'https://informburo.kz/storage/photos/137/main/400x400/TaOY46fZzmLoWTN99jEsWE394o5XonrqbfBN6g70.jpg',
        ],
        answer: 'Монголия',
    },
    {
        type: 'quiz',
        title: 'В каком районе зафиксировано самое большое количество цунами?',
        options: [
            'Атлантического океана',
            'Индийского океана',
            'Средиземного моря',
            'Тихоокеанском побережье',
        ],
        answer: 'Тихоокеанском побережье',
    },
    {
        type: 'quiz',
        title: 'К какой области приурочена большая часть крупных землетрясений?',
        options: [
            'Киммерийская складчатость',
            'Байкальская складчатость',
            'Альпийская складчатость',
            'Каледонская складчатость',
        ],
        answer: 'Альпийская складчатость',
    },
    {
        type: 'quiz',
        title: 'Что такое землетрясение?',
        options: [
            'Проекция центра очага землетрясения на земную поверхность',
            'Освобождение энергии земных недр в виде упругих сейсмических волн',
            'Колебания земной коры',
            'Волновые колебания в скальных породах',
        ],
        answer: 'Освобождение энергии земных недр в виде упругих сейсмических волн',
    },
    {
        type: 'quiz',
        title: 'Какое место по числу жертв занимают землетрясения?',
        options: ['Первое', 'Третье', 'Четвертое', 'Второе'],
        answer: 'Третье',
    },
    {
        type: 'select',
        title: 'Какие бывают два основных этапа рекультивации?',
        options: [
            'Геодезический',
            'Горнотехнический',
            'Биологический',
            'Тяжело-промышленный',
        ],
        answer: ['Горнотехнический', 'Биологический'],
    },
    {
        type: 'quiz',
        title: 'Что загрязняется больше в результате горных работ?',
        options: ['Водоемы', 'Атмосфера', 'Почва', 'Растения'],
        assets: [
            'https://avatars.dzeninfra.ru/get-zen_doc/5240577/pub_60fe6bdbd0a97d5400ad278a_60fe6c0451197c3f2153c3fa/scale_1200',
            'https://decor-plus.com.ua/9017/steklyannaya-plitka-3-d-art-s-nebo-48.jpg',
            'https://www.proagro.su/wp-content/uploads/2022/08/kak-uluchshit-kachestvo-pochvy.jpg',
            'https://news.store.rambler.ru/img/91e2bd1ef2e4a7154a9a31d5a4798e7e?img-format=auto&img-1-resize=height:400,fit:max&img-2-filter=sharpen',
        ],
        answer: 'Водоемы',
    },
    {
        type: 'quiz',
        title: 'Какой самый глубокий в мире карьер разработки медной руды?',
        options: ['Токепала', 'Меднорудянский', 'Бингем-Каньон', 'Чукикамата'],
        assets: [
            'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/Toquepala_mine.jpg/400px-Toquepala_mine.jpg',
            'https://golosarmenii.am/media/photos/album139/138978_400_400.jpg?v=1658487506217',
            'https://img-fotki.yandex.ru/get/6447/81634935.ab/0_95a63_c0f44428_XL.jpg',
            'https://www.orangesmile.com/extreme/img/w600/chuquicamata_1.jpg',
        ],
        answer: 'Бингем-Каньон',
    },
    {
        type: 'quiz',
        title: 'Какая магнитуда землетрясения в Турции 2023?',
        options: ['5,4', '6', '7,8', '8,2'],
        answer: '7,8',
    },
    {
        type: 'select',
        title: 'Определите, какие их этих элементов выделяется при извержении вулкана:',
        options: ['Аммиак', 'Сернистый газ', 'Ртуть', 'Уран'],
        assets: [
            'https://apteki.medsi.ru/thumb/400x400xIN/upload/iblock/6a2/ze0d06yc252nbpde7mbnr45l5s6lyszi.jpg',
            'https://us.123rf.com/450wm/molekuul/molekuul1303/molekuul130300355/18502385-sulfur-dioxide-sulphur-dioxide-so2-gas-molecular-model-so2-e220-is-also-used-in-winemaking.jpg?ver=6',
            'https://en.chemical-elements.ru/upload/resize_cache/iblock/69c/400_400_1/69cd9139b4bacb6bd7f2a77702ae20c0.JPG',
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3xs_vsyPMOhsqM7OLOU3WUU3Lf0uOCQCKog&usqp=CAU',
        ],
        answer: ['Аммиак', 'Сернистый газ'],
    },
    {
        type: 'quiz',
        title: 'В какой стране находится вулкан Эйяфьядлайёкюдль?',
        options: ['Новая Зеландия', 'Япония', 'Исландия', 'Италия'],
        assets: [
            'https://cf.youtravel.me/tr:w-400%2Ch-400/upload/tours/26518/media/391/391f236ea99d50213f56a205c272b071.jpg',
            'https://static.nationalgeographic.co.uk/files/styles/image_3200/public/cherry-blossoms-mt-fuji-japan.jpg?w=400&h=400&q=75',
            'https://cf.youtravel.me/tr:w-400%2Ch-400/upload/tours/5681/media/aa3/aa3f8d8634579bfc42cec2a85d5f813c.jpg',
            'https://girlsgottadrink.com/wp-content/uploads/2013/09/IMG_2340-e1380299314994.jpg',
        ],
        answer: 'Исландия',
    },
] as const;

export const CAPITAN_QUESTIONS: PureQuestion[] = [
    {
        type: 'pure',
        title: 'Причиной какой болезни могут стать большие дозы радиации?',
        answer: 'Лучевая болезнь',
    },
    {
        type: 'pure',
        title: 'Каковы основные геоэкологические проблемы, связанные с высоким уровнем эрозии почвы в различных регионах мира?',
        answer: 'Высокий уровень эрозии почвы приводит к потере плодородного слоя, снижению качества почвенного состава и увеличению риска наводнений.',
    },
    {
        type: 'pure',
        title: 'Как лесозаготовки и эксплуатация минеральных ресурсов влияют на устойчивость литосферы и формирование геологических нарушений?',
        answer: 'Лесозаготовки и эксплуатация минеральных ресурсов могут вызывать разрушение экосистем, изменение ландшафта и нарушение геологического баланса в регионах, где осуществляются эти деятельности.',
    },
    {
        type: 'pure',
        title: 'В чем заключаются последствия городского строительства и неправильного землепользования для состояния литосферы?',
        answer: 'Городское строительство и неправильное землепользование могут привести к деградации почв, потере природных биотопов, изменению гидрогеологического режима и ухудшению качества почвенного покрова.',
    },
    {
        type: 'pure',
        title: 'Как загрязнение почвы токсичными веществами воздействует на экосистемы и человеческое здоровье?',
        answer: 'Загрязнение почвы токсичными веществами может привести к отравлению растений, животных и человека, а также вызвать долгосрочные последствия для биологического разнообразия.',
    },
    {
        type: 'pure',
        title: 'Как изменения климата влияют на литосферные процессы, такие как таяние ледников и поднятие уровня морей, и как эти изменения отражаются на экосистемах и обитающих в них организмах?',
        answer: 'Изменения климата, такие как таяние ледников и поднятие уровня морей, могут вызвать изменения в геологических процессах, включая эрозию и формирование новых ландшафтов, с чем связаны риски для природных и человеческих систем.',
    },
] as const;

/*
Причиной какой болезни могут стать большие дозы радиации?
    - Лучевая болезнь

Каковы основные геоэкологические проблемы, связанные с высоким уровнем эрозии почвы в различных регионах мира?
    - Высокий уровень эрозии почвы приводит к потере плодородного слоя, снижению качества почвенного состава и увеличению риска наводнений.

Как лесозаготовки и эксплуатация минеральных ресурсов влияют на устойчивость литосферы и формирование геологических нарушений?
    - Лесозаготовки и эксплуатация минеральных ресурсов могут вызывать разрушение экосистем, изменение ландшафта и нарушение геологического баланса в регионах, где осуществляются эти деятельности.

В чем заключаются последствия городского строительства и неправильного землепользования для состояния литосферы?
    - Городское строительство и неправильное землепользование могут привести к деградации почв, потере природных биотопов, изменению гидрогеологического режима и ухудшению качества почвенного покрова.

Как загрязнение почвы токсичными веществами воздействует на экосистемы и человеческое здоровье?
    - Загрязнение почвы токсичными веществами может привести к отравлению растений, животных и человека, а также вызвать долгосрочные последствия для биологического разнообразия.

Как изменения климата влияют на литосферные процессы, такие как таяние ледников и поднятие уровня морей, и как эти изменения отражаются на экосистемах и обитающих в них организмах?
    - Изменения климата, такие как таяние ледников и поднятие уровня морей, могут вызвать изменения в геологических процессах, включая эрозию и формирование новых ландшафтов, с чем связаны риски для природных и человеческих систем.
*/

export const CORRECT_NUMBER = QUESTIONS.reduce((acc, question) => {
    if (question.type === 'pure') {
        return acc;
    }
    if (question.type === 'quiz') {
        return acc + 1;
    }
    if (question.type === 'select') {
        return acc + question.answer.length;
    }
    return acc;
}, 0);

export default QUESTIONS;
