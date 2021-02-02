let request = require('request');



let options = [{
    'method': 'POST',
    'url': 'https://5fck9n9ora.execute-api.eu-west-2.amazonaws.com/srikanthm/results',
    'headers': {
        'Authorization': 'eyJraWQiOiJvWUl3XC9tbjJqZkNPa3JzMllQdWl2cTZBbEFhaFp0T1NRd1wvQWhtaDZxMW89IiwiYWxnIjoiUlMyNTYifQ.eyJzdWIiOiI1NDY4YjdmNy0yNGUwLTRkMWItYWVmYS0wNTNmYTgxYmUxNmQiLCJhdWQiOiIyNWRlbjc4YjNrZmE4b2gyMm1pN2g5OW84ZSIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJldmVudF9pZCI6IjJlYWZhMmRmLTRkOTItNDMxZC05OGE2LTA4NjM0MTdjYjMxMSIsInRva2VuX3VzZSI6ImlkIiwiYXV0aF90aW1lIjoxNjEyMjEzNjEwLCJpc3MiOiJodHRwczpcL1wvY29nbml0by1pZHAuZXUtd2VzdC0yLmFtYXpvbmF3cy5jb21cL2V1LXdlc3QtMl85d3VrZGZyNXEiLCJjb2duaXRvOnVzZXJuYW1lIjoidGVzdCIsImV4cCI6MTYxMjMwMDAxMCwiaWF0IjoxNjEyMjEzNjExLCJlbWFpbCI6Im1hcmNpbmRAa2Fpbm9zLmNvbSJ9.EqHZHMZHcY1R1gtZL0TAWXobKvxWiCLASO8wzMY2wjIq0FvHR6PFhbkzJhgGJS-xgP4SxleOtzMp19mrnnlQCbwTz9kUtJckW9rXJSDJWolxbT-yP80vjyPXzbwpAOvXZJ-1NGP4S3GWIHLuUJ_pxpTaP5ghZCeXHApKvJCpyjU8HR1JDA7alZcuJf2dey95WWM_7Dx2OtjlyrWEZKcQG838j2QOt2NgcfBi5KpLKNl69XLjwgzu0WG7tue0RQyPqWYQJHElAoJDDqK97vpw_A2nIUtXmIXIMv5q0uYt23r1kzeSB9g_w4g9IQiLUxqEpXPsWroLpNG6JPgewGwJng',
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({"result":"negative","sampleId":"AAA00000004","labId":"smth4","dateTime":"2020-10-05T09:34:50.545Z","testKit":"cos","resultInfo":"some information","sampleCreationDate":"2020-10-05T09:34:50.545Z","processTime":"2020-10-05T09:34:50.545Z","ch1Target":"ORF1ab","ch1Result":"Negative","ch1Cq":111.111,"ch2Target":"ORF2ab","ch2Result":"Positive","ch2Cq":222.222,"ch3Target":"ORF3ab","ch3Result":"Negative","ch3Cq":333.333,"ch4Target":"ORF4ab","ch4Result":"Positive","ch4Cq":444.444})

},
    {
        'method': 'POST',
        'url': 'https://5fck9n9ora.execute-api.eu-west-2.amazonaws.com/srikanthm/results',
        'headers': {
            'Authorization': 'eyJraWQiOiJvWUl3XC9tbjJqZkNPa3JzMllQdWl2cTZBbEFhaFp0T1NRd1wvQWhtaDZxMW89IiwiYWxnIjoiUlMyNTYifQ.eyJzdWIiOiI1NDY4YjdmNy0yNGUwLTRkMWItYWVmYS0wNTNmYTgxYmUxNmQiLCJhdWQiOiIyNWRlbjc4YjNrZmE4b2gyMm1pN2g5OW84ZSIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJldmVudF9pZCI6IjJlYWZhMmRmLTRkOTItNDMxZC05OGE2LTA4NjM0MTdjYjMxMSIsInRva2VuX3VzZSI6ImlkIiwiYXV0aF90aW1lIjoxNjEyMjEzNjEwLCJpc3MiOiJodHRwczpcL1wvY29nbml0by1pZHAuZXUtd2VzdC0yLmFtYXpvbmF3cy5jb21cL2V1LXdlc3QtMl85d3VrZGZyNXEiLCJjb2duaXRvOnVzZXJuYW1lIjoidGVzdCIsImV4cCI6MTYxMjMwMDAxMCwiaWF0IjoxNjEyMjEzNjExLCJlbWFpbCI6Im1hcmNpbmRAa2Fpbm9zLmNvbSJ9.EqHZHMZHcY1R1gtZL0TAWXobKvxWiCLASO8wzMY2wjIq0FvHR6PFhbkzJhgGJS-xgP4SxleOtzMp19mrnnlQCbwTz9kUtJckW9rXJSDJWolxbT-yP80vjyPXzbwpAOvXZJ-1NGP4S3GWIHLuUJ_pxpTaP5ghZCeXHApKvJCpyjU8HR1JDA7alZcuJf2dey95WWM_7Dx2OtjlyrWEZKcQG838j2QOt2NgcfBi5KpLKNl69XLjwgzu0WG7tue0RQyPqWYQJHElAoJDDqK97vpw_A2nIUtXmIXIMv5q0uYt23r1kzeSB9g_w4g9IQiLUxqEpXPsWroLpNG6JPgewGwJng',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({"result":"negative","sampleId":"AAA00000005","labId":"smth4","dateTime":"2020-10-05T09:34:50.545Z","testKit":"cos","resultInfo":"some information","sampleCreationDate":"2020-10-05T09:34:50.545Z","processTime":"2020-10-05T09:34:50.545Z","ch1Target":"ORF1ab","ch1Result":"Negative","ch1Cq":111.111,"ch2Target":"ORF2ab","ch2Result":"Positive","ch2Cq":222.222,"ch3Target":"ORF3ab","ch3Result":"Negative","ch3Cq":333.333,"ch4Target":"ORF4ab","ch4Result":"Positive","ch4Cq":444.444})

    },
    {
        'method': 'POST',
        'url': 'https://5fck9n9ora.execute-api.eu-west-2.amazonaws.com/srikanthm/results',
        'headers': {
            'Authorization': 'eyJraWQiOiJvWUl3XC9tbjJqZkNPa3JzMllQdWl2cTZBbEFhaFp0T1NRd1wvQWhtaDZxMW89IiwiYWxnIjoiUlMyNTYifQ.eyJzdWIiOiI1NDY4YjdmNy0yNGUwLTRkMWItYWVmYS0wNTNmYTgxYmUxNmQiLCJhdWQiOiIyNWRlbjc4YjNrZmE4b2gyMm1pN2g5OW84ZSIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJldmVudF9pZCI6IjJlYWZhMmRmLTRkOTItNDMxZC05OGE2LTA4NjM0MTdjYjMxMSIsInRva2VuX3VzZSI6ImlkIiwiYXV0aF90aW1lIjoxNjEyMjEzNjEwLCJpc3MiOiJodHRwczpcL1wvY29nbml0by1pZHAuZXUtd2VzdC0yLmFtYXpvbmF3cy5jb21cL2V1LXdlc3QtMl85d3VrZGZyNXEiLCJjb2duaXRvOnVzZXJuYW1lIjoidGVzdCIsImV4cCI6MTYxMjMwMDAxMCwiaWF0IjoxNjEyMjEzNjExLCJlbWFpbCI6Im1hcmNpbmRAa2Fpbm9zLmNvbSJ9.EqHZHMZHcY1R1gtZL0TAWXobKvxWiCLASO8wzMY2wjIq0FvHR6PFhbkzJhgGJS-xgP4SxleOtzMp19mrnnlQCbwTz9kUtJckW9rXJSDJWolxbT-yP80vjyPXzbwpAOvXZJ-1NGP4S3GWIHLuUJ_pxpTaP5ghZCeXHApKvJCpyjU8HR1JDA7alZcuJf2dey95WWM_7Dx2OtjlyrWEZKcQG838j2QOt2NgcfBi5KpLKNl69XLjwgzu0WG7tue0RQyPqWYQJHElAoJDDqK97vpw_A2nIUtXmIXIMv5q0uYt23r1kzeSB9g_w4g9IQiLUxqEpXPsWroLpNG6JPgewGwJng',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({"result":"negative","sampleId":"AAA00000006","labId":"smth4","dateTime":"2020-10-05T09:34:50.545Z","testKit":"cos","resultInfo":"some information","sampleCreationDate":"2020-10-05T09:34:50.545Z","processTime":"2020-10-05T09:34:50.545Z","ch1Target":"ORF1ab","ch1Result":"Negative","ch1Cq":111.111,"ch2Target":"ORF2ab","ch2Result":"Positive","ch2Cq":222.222,"ch3Target":"ORF3ab","ch3Result":"Negative","ch3Cq":333.333,"ch4Target":"ORF4ab","ch4Result":"Positive","ch4Cq":444.444})

    },
    {
        'method': 'POST',
        'url': 'https://5fck9n9ora.execute-api.eu-west-2.amazonaws.com/srikanthm/results',
        'headers': {
            'Authorization': 'eyJraWQiOiJvWUl3XC9tbjJqZkNPa3JzMllQdWl2cTZBbEFhaFp0T1NRd1wvQWhtaDZxMW89IiwiYWxnIjoiUlMyNTYifQ.eyJzdWIiOiI1NDY4YjdmNy0yNGUwLTRkMWItYWVmYS0wNTNmYTgxYmUxNmQiLCJhdWQiOiIyNWRlbjc4YjNrZmE4b2gyMm1pN2g5OW84ZSIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJldmVudF9pZCI6IjJlYWZhMmRmLTRkOTItNDMxZC05OGE2LTA4NjM0MTdjYjMxMSIsInRva2VuX3VzZSI6ImlkIiwiYXV0aF90aW1lIjoxNjEyMjEzNjEwLCJpc3MiOiJodHRwczpcL1wvY29nbml0by1pZHAuZXUtd2VzdC0yLmFtYXpvbmF3cy5jb21cL2V1LXdlc3QtMl85d3VrZGZyNXEiLCJjb2duaXRvOnVzZXJuYW1lIjoidGVzdCIsImV4cCI6MTYxMjMwMDAxMCwiaWF0IjoxNjEyMjEzNjExLCJlbWFpbCI6Im1hcmNpbmRAa2Fpbm9zLmNvbSJ9.EqHZHMZHcY1R1gtZL0TAWXobKvxWiCLASO8wzMY2wjIq0FvHR6PFhbkzJhgGJS-xgP4SxleOtzMp19mrnnlQCbwTz9kUtJckW9rXJSDJWolxbT-yP80vjyPXzbwpAOvXZJ-1NGP4S3GWIHLuUJ_pxpTaP5ghZCeXHApKvJCpyjU8HR1JDA7alZcuJf2dey95WWM_7Dx2OtjlyrWEZKcQG838j2QOt2NgcfBi5KpLKNl69XLjwgzu0WG7tue0RQyPqWYQJHElAoJDDqK97vpw_A2nIUtXmIXIMv5q0uYt23r1kzeSB9g_w4g9IQiLUxqEpXPsWroLpNG6JPgewGwJng',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({"result":"negative","sampleId":"AAA00000007","labId":"smth4","dateTime":"2020-10-05T09:34:50.545Z","testKit":"cos","resultInfo":"some information","sampleCreationDate":"2020-10-05T09:34:50.545Z","processTime":"2020-10-05T09:34:50.545Z","ch1Target":"ORF1ab","ch1Result":"Negative","ch1Cq":111.111,"ch2Target":"ORF2ab","ch2Result":"Positive","ch2Cq":222.222,"ch3Target":"ORF3ab","ch3Result":"Negative","ch3Cq":333.333,"ch4Target":"ORF4ab","ch4Result":"Positive","ch4Cq":444.444})

    },
    {
        'method': 'POST',
        'url': 'https://5fck9n9ora.execute-api.eu-west-2.amazonaws.com/srikanthm/results',
        'headers': {
            'Authorization': 'eyJraWQiOiJvWUl3XC9tbjJqZkNPa3JzMllQdWl2cTZBbEFhaFp0T1NRd1wvQWhtaDZxMW89IiwiYWxnIjoiUlMyNTYifQ.eyJzdWIiOiI1NDY4YjdmNy0yNGUwLTRkMWItYWVmYS0wNTNmYTgxYmUxNmQiLCJhdWQiOiIyNWRlbjc4YjNrZmE4b2gyMm1pN2g5OW84ZSIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJldmVudF9pZCI6IjJlYWZhMmRmLTRkOTItNDMxZC05OGE2LTA4NjM0MTdjYjMxMSIsInRva2VuX3VzZSI6ImlkIiwiYXV0aF90aW1lIjoxNjEyMjEzNjEwLCJpc3MiOiJodHRwczpcL1wvY29nbml0by1pZHAuZXUtd2VzdC0yLmFtYXpvbmF3cy5jb21cL2V1LXdlc3QtMl85d3VrZGZyNXEiLCJjb2duaXRvOnVzZXJuYW1lIjoidGVzdCIsImV4cCI6MTYxMjMwMDAxMCwiaWF0IjoxNjEyMjEzNjExLCJlbWFpbCI6Im1hcmNpbmRAa2Fpbm9zLmNvbSJ9.EqHZHMZHcY1R1gtZL0TAWXobKvxWiCLASO8wzMY2wjIq0FvHR6PFhbkzJhgGJS-xgP4SxleOtzMp19mrnnlQCbwTz9kUtJckW9rXJSDJWolxbT-yP80vjyPXzbwpAOvXZJ-1NGP4S3GWIHLuUJ_pxpTaP5ghZCeXHApKvJCpyjU8HR1JDA7alZcuJf2dey95WWM_7Dx2OtjlyrWEZKcQG838j2QOt2NgcfBi5KpLKNl69XLjwgzu0WG7tue0RQyPqWYQJHElAoJDDqK97vpw_A2nIUtXmIXIMv5q0uYt23r1kzeSB9g_w4g9IQiLUxqEpXPsWroLpNG6JPgewGwJng',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({"result":"negative","sampleId":"AAA00000008","labId":"smth4","dateTime":"2020-10-05T09:34:50.545Z","testKit":"cos","resultInfo":"some information","sampleCreationDate":"2020-10-05T09:34:50.545Z","processTime":"2020-10-05T09:34:50.545Z","ch1Target":"ORF1ab","ch1Result":"Negative","ch1Cq":111.111,"ch2Target":"ORF2ab","ch2Result":"Positive","ch2Cq":222.222,"ch3Target":"ORF3ab","ch3Result":"Negative","ch3Cq":333.333,"ch4Target":"ORF4ab","ch4Result":"Positive","ch4Cq":444.444})

    },
    {
        'method': 'POST',
        'url': 'https://5fck9n9ora.execute-api.eu-west-2.amazonaws.com/srikanthm/results',
        'headers': {
            'Authorization': 'eyJraWQiOiJvWUl3XC9tbjJqZkNPa3JzMllQdWl2cTZBbEFhaFp0T1NRd1wvQWhtaDZxMW89IiwiYWxnIjoiUlMyNTYifQ.eyJzdWIiOiI1NDY4YjdmNy0yNGUwLTRkMWItYWVmYS0wNTNmYTgxYmUxNmQiLCJhdWQiOiIyNWRlbjc4YjNrZmE4b2gyMm1pN2g5OW84ZSIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJldmVudF9pZCI6IjJlYWZhMmRmLTRkOTItNDMxZC05OGE2LTA4NjM0MTdjYjMxMSIsInRva2VuX3VzZSI6ImlkIiwiYXV0aF90aW1lIjoxNjEyMjEzNjEwLCJpc3MiOiJodHRwczpcL1wvY29nbml0by1pZHAuZXUtd2VzdC0yLmFtYXpvbmF3cy5jb21cL2V1LXdlc3QtMl85d3VrZGZyNXEiLCJjb2duaXRvOnVzZXJuYW1lIjoidGVzdCIsImV4cCI6MTYxMjMwMDAxMCwiaWF0IjoxNjEyMjEzNjExLCJlbWFpbCI6Im1hcmNpbmRAa2Fpbm9zLmNvbSJ9.EqHZHMZHcY1R1gtZL0TAWXobKvxWiCLASO8wzMY2wjIq0FvHR6PFhbkzJhgGJS-xgP4SxleOtzMp19mrnnlQCbwTz9kUtJckW9rXJSDJWolxbT-yP80vjyPXzbwpAOvXZJ-1NGP4S3GWIHLuUJ_pxpTaP5ghZCeXHApKvJCpyjU8HR1JDA7alZcuJf2dey95WWM_7Dx2OtjlyrWEZKcQG838j2QOt2NgcfBi5KpLKNl69XLjwgzu0WG7tue0RQyPqWYQJHElAoJDDqK97vpw_A2nIUtXmIXIMv5q0uYt23r1kzeSB9g_w4g9IQiLUxqEpXPsWroLpNG6JPgewGwJng',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({"result":"negative","sampleId":"AAA00000009","labId":"smth4","dateTime":"2020-10-05T09:34:50.545Z","testKit":"cos","resultInfo":"some information","sampleCreationDate":"2020-10-05T09:34:50.545Z","processTime":"2020-10-05T09:34:50.545Z","ch1Target":"ORF1ab","ch1Result":"Negative","ch1Cq":111.111,"ch2Target":"ORF2ab","ch2Result":"Positive","ch2Cq":222.222,"ch3Target":"ORF3ab","ch3Result":"Negative","ch3Cq":333.333,"ch4Target":"ORF4ab","ch4Result":"Positive","ch4Cq":444.444})

    },
    {
        'method': 'POST',
        'url': 'https://5fck9n9ora.execute-api.eu-west-2.amazonaws.com/srikanthm/results',
        'headers': {
            'Authorization': 'eyJraWQiOiJvWUl3XC9tbjJqZkNPa3JzMllQdWl2cTZBbEFhaFp0T1NRd1wvQWhtaDZxMW89IiwiYWxnIjoiUlMyNTYifQ.eyJzdWIiOiI1NDY4YjdmNy0yNGUwLTRkMWItYWVmYS0wNTNmYTgxYmUxNmQiLCJhdWQiOiIyNWRlbjc4YjNrZmE4b2gyMm1pN2g5OW84ZSIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJldmVudF9pZCI6IjJlYWZhMmRmLTRkOTItNDMxZC05OGE2LTA4NjM0MTdjYjMxMSIsInRva2VuX3VzZSI6ImlkIiwiYXV0aF90aW1lIjoxNjEyMjEzNjEwLCJpc3MiOiJodHRwczpcL1wvY29nbml0by1pZHAuZXUtd2VzdC0yLmFtYXpvbmF3cy5jb21cL2V1LXdlc3QtMl85d3VrZGZyNXEiLCJjb2duaXRvOnVzZXJuYW1lIjoidGVzdCIsImV4cCI6MTYxMjMwMDAxMCwiaWF0IjoxNjEyMjEzNjExLCJlbWFpbCI6Im1hcmNpbmRAa2Fpbm9zLmNvbSJ9.EqHZHMZHcY1R1gtZL0TAWXobKvxWiCLASO8wzMY2wjIq0FvHR6PFhbkzJhgGJS-xgP4SxleOtzMp19mrnnlQCbwTz9kUtJckW9rXJSDJWolxbT-yP80vjyPXzbwpAOvXZJ-1NGP4S3GWIHLuUJ_pxpTaP5ghZCeXHApKvJCpyjU8HR1JDA7alZcuJf2dey95WWM_7Dx2OtjlyrWEZKcQG838j2QOt2NgcfBi5KpLKNl69XLjwgzu0WG7tue0RQyPqWYQJHElAoJDDqK97vpw_A2nIUtXmIXIMv5q0uYt23r1kzeSB9g_w4g9IQiLUxqEpXPsWroLpNG6JPgewGwJng',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({"result":"negative","sampleId":"AAA00000010","labId":"smth4","dateTime":"2020-10-05T09:34:50.545Z","testKit":"cos","resultInfo":"some information","sampleCreationDate":"2020-10-05T09:34:50.545Z","processTime":"2020-10-05T09:34:50.545Z","ch1Target":"ORF1ab","ch1Result":"Negative","ch1Cq":111.111,"ch2Target":"ORF2ab","ch2Result":"Positive","ch2Cq":222.222,"ch3Target":"ORF3ab","ch3Result":"Negative","ch3Cq":333.333,"ch4Target":"ORF4ab","ch4Result":"Positive","ch4Cq":444.444})

    },
    {
        'method': 'POST',
        'url': 'https://5fck9n9ora.execute-api.eu-west-2.amazonaws.com/srikanthm/results',
        'headers': {
            'Authorization': 'eyJraWQiOiJvWUl3XC9tbjJqZkNPa3JzMllQdWl2cTZBbEFhaFp0T1NRd1wvQWhtaDZxMW89IiwiYWxnIjoiUlMyNTYifQ.eyJzdWIiOiI1NDY4YjdmNy0yNGUwLTRkMWItYWVmYS0wNTNmYTgxYmUxNmQiLCJhdWQiOiIyNWRlbjc4YjNrZmE4b2gyMm1pN2g5OW84ZSIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJldmVudF9pZCI6IjJlYWZhMmRmLTRkOTItNDMxZC05OGE2LTA4NjM0MTdjYjMxMSIsInRva2VuX3VzZSI6ImlkIiwiYXV0aF90aW1lIjoxNjEyMjEzNjEwLCJpc3MiOiJodHRwczpcL1wvY29nbml0by1pZHAuZXUtd2VzdC0yLmFtYXpvbmF3cy5jb21cL2V1LXdlc3QtMl85d3VrZGZyNXEiLCJjb2duaXRvOnVzZXJuYW1lIjoidGVzdCIsImV4cCI6MTYxMjMwMDAxMCwiaWF0IjoxNjEyMjEzNjExLCJlbWFpbCI6Im1hcmNpbmRAa2Fpbm9zLmNvbSJ9.EqHZHMZHcY1R1gtZL0TAWXobKvxWiCLASO8wzMY2wjIq0FvHR6PFhbkzJhgGJS-xgP4SxleOtzMp19mrnnlQCbwTz9kUtJckW9rXJSDJWolxbT-yP80vjyPXzbwpAOvXZJ-1NGP4S3GWIHLuUJ_pxpTaP5ghZCeXHApKvJCpyjU8HR1JDA7alZcuJf2dey95WWM_7Dx2OtjlyrWEZKcQG838j2QOt2NgcfBi5KpLKNl69XLjwgzu0WG7tue0RQyPqWYQJHElAoJDDqK97vpw_A2nIUtXmIXIMv5q0uYt23r1kzeSB9g_w4g9IQiLUxqEpXPsWroLpNG6JPgewGwJng',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({"result":"negative","sampleId":"AAA00000011","labId":"smth4","dateTime":"2020-10-05T09:34:50.545Z","testKit":"cos","resultInfo":"some information","sampleCreationDate":"2020-10-05T09:34:50.545Z","processTime":"2020-10-05T09:34:50.545Z","ch1Target":"ORF1ab","ch1Result":"Negative","ch1Cq":111.111,"ch2Target":"ORF2ab","ch2Result":"Positive","ch2Cq":222.222,"ch3Target":"ORF3ab","ch3Result":"Negative","ch3Cq":333.333,"ch4Target":"ORF4ab","ch4Result":"Positive","ch4Cq":444.444})

    },
    {
        'method': 'POST',
        'url': 'https://5fck9n9ora.execute-api.eu-west-2.amazonaws.com/srikanthm/results',
        'headers': {
            'Authorization': 'eyJraWQiOiJvWUl3XC9tbjJqZkNPa3JzMllQdWl2cTZBbEFhaFp0T1NRd1wvQWhtaDZxMW89IiwiYWxnIjoiUlMyNTYifQ.eyJzdWIiOiI1NDY4YjdmNy0yNGUwLTRkMWItYWVmYS0wNTNmYTgxYmUxNmQiLCJhdWQiOiIyNWRlbjc4YjNrZmE4b2gyMm1pN2g5OW84ZSIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJldmVudF9pZCI6IjJlYWZhMmRmLTRkOTItNDMxZC05OGE2LTA4NjM0MTdjYjMxMSIsInRva2VuX3VzZSI6ImlkIiwiYXV0aF90aW1lIjoxNjEyMjEzNjEwLCJpc3MiOiJodHRwczpcL1wvY29nbml0by1pZHAuZXUtd2VzdC0yLmFtYXpvbmF3cy5jb21cL2V1LXdlc3QtMl85d3VrZGZyNXEiLCJjb2duaXRvOnVzZXJuYW1lIjoidGVzdCIsImV4cCI6MTYxMjMwMDAxMCwiaWF0IjoxNjEyMjEzNjExLCJlbWFpbCI6Im1hcmNpbmRAa2Fpbm9zLmNvbSJ9.EqHZHMZHcY1R1gtZL0TAWXobKvxWiCLASO8wzMY2wjIq0FvHR6PFhbkzJhgGJS-xgP4SxleOtzMp19mrnnlQCbwTz9kUtJckW9rXJSDJWolxbT-yP80vjyPXzbwpAOvXZJ-1NGP4S3GWIHLuUJ_pxpTaP5ghZCeXHApKvJCpyjU8HR1JDA7alZcuJf2dey95WWM_7Dx2OtjlyrWEZKcQG838j2QOt2NgcfBi5KpLKNl69XLjwgzu0WG7tue0RQyPqWYQJHElAoJDDqK97vpw_A2nIUtXmIXIMv5q0uYt23r1kzeSB9g_w4g9IQiLUxqEpXPsWroLpNG6JPgewGwJng',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({"result":"negative","sampleId":"AAA00000012","labId":"smth4","dateTime":"2020-10-05T09:34:50.545Z","testKit":"cos","resultInfo":"some information","sampleCreationDate":"2020-10-05T09:34:50.545Z","processTime":"2020-10-05T09:34:50.545Z","ch1Target":"ORF1ab","ch1Result":"Negative","ch1Cq":111.111,"ch2Target":"ORF2ab","ch2Result":"Positive","ch2Cq":222.222,"ch3Target":"ORF3ab","ch3Result":"Negative","ch3Cq":333.333,"ch4Target":"ORF4ab","ch4Result":"Positive","ch4Cq":444.444})

    },
    {
        'method': 'POST',
        'url': 'https://5fck9n9ora.execute-api.eu-west-2.amazonaws.com/srikanthm/results',
        'headers': {
            'Authorization': 'eyJraWQiOiJvWUl3XC9tbjJqZkNPa3JzMllQdWl2cTZBbEFhaFp0T1NRd1wvQWhtaDZxMW89IiwiYWxnIjoiUlMyNTYifQ.eyJzdWIiOiI1NDY4YjdmNy0yNGUwLTRkMWItYWVmYS0wNTNmYTgxYmUxNmQiLCJhdWQiOiIyNWRlbjc4YjNrZmE4b2gyMm1pN2g5OW84ZSIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJldmVudF9pZCI6IjJlYWZhMmRmLTRkOTItNDMxZC05OGE2LTA4NjM0MTdjYjMxMSIsInRva2VuX3VzZSI6ImlkIiwiYXV0aF90aW1lIjoxNjEyMjEzNjEwLCJpc3MiOiJodHRwczpcL1wvY29nbml0by1pZHAuZXUtd2VzdC0yLmFtYXpvbmF3cy5jb21cL2V1LXdlc3QtMl85d3VrZGZyNXEiLCJjb2duaXRvOnVzZXJuYW1lIjoidGVzdCIsImV4cCI6MTYxMjMwMDAxMCwiaWF0IjoxNjEyMjEzNjExLCJlbWFpbCI6Im1hcmNpbmRAa2Fpbm9zLmNvbSJ9.EqHZHMZHcY1R1gtZL0TAWXobKvxWiCLASO8wzMY2wjIq0FvHR6PFhbkzJhgGJS-xgP4SxleOtzMp19mrnnlQCbwTz9kUtJckW9rXJSDJWolxbT-yP80vjyPXzbwpAOvXZJ-1NGP4S3GWIHLuUJ_pxpTaP5ghZCeXHApKvJCpyjU8HR1JDA7alZcuJf2dey95WWM_7Dx2OtjlyrWEZKcQG838j2QOt2NgcfBi5KpLKNl69XLjwgzu0WG7tue0RQyPqWYQJHElAoJDDqK97vpw_A2nIUtXmIXIMv5q0uYt23r1kzeSB9g_w4g9IQiLUxqEpXPsWroLpNG6JPgewGwJng',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({"result":"negative","sampleId":"AAA00000013","labId":"smth4","dateTime":"2020-10-05T09:34:50.545Z","testKit":"cos","resultInfo":"some information","sampleCreationDate":"2020-10-05T09:34:50.545Z","processTime":"2020-10-05T09:34:50.545Z","ch1Target":"ORF1ab","ch1Result":"Negative","ch1Cq":111.111,"ch2Target":"ORF2ab","ch2Result":"Positive","ch2Cq":222.222,"ch3Target":"ORF3ab","ch3Result":"Negative","ch3Cq":333.333,"ch4Target":"ORF4ab","ch4Result":"Positive","ch4Cq":444.444})

    },
    {
        'method': 'POST',
        'url': 'https://5fck9n9ora.execute-api.eu-west-2.amazonaws.com/srikanthm/results',
        'headers': {
            'Authorization': 'eyJraWQiOiJvWUl3XC9tbjJqZkNPa3JzMllQdWl2cTZBbEFhaFp0T1NRd1wvQWhtaDZxMW89IiwiYWxnIjoiUlMyNTYifQ.eyJzdWIiOiI1NDY4YjdmNy0yNGUwLTRkMWItYWVmYS0wNTNmYTgxYmUxNmQiLCJhdWQiOiIyNWRlbjc4YjNrZmE4b2gyMm1pN2g5OW84ZSIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJldmVudF9pZCI6IjJlYWZhMmRmLTRkOTItNDMxZC05OGE2LTA4NjM0MTdjYjMxMSIsInRva2VuX3VzZSI6ImlkIiwiYXV0aF90aW1lIjoxNjEyMjEzNjEwLCJpc3MiOiJodHRwczpcL1wvY29nbml0by1pZHAuZXUtd2VzdC0yLmFtYXpvbmF3cy5jb21cL2V1LXdlc3QtMl85d3VrZGZyNXEiLCJjb2duaXRvOnVzZXJuYW1lIjoidGVzdCIsImV4cCI6MTYxMjMwMDAxMCwiaWF0IjoxNjEyMjEzNjExLCJlbWFpbCI6Im1hcmNpbmRAa2Fpbm9zLmNvbSJ9.EqHZHMZHcY1R1gtZL0TAWXobKvxWiCLASO8wzMY2wjIq0FvHR6PFhbkzJhgGJS-xgP4SxleOtzMp19mrnnlQCbwTz9kUtJckW9rXJSDJWolxbT-yP80vjyPXzbwpAOvXZJ-1NGP4S3GWIHLuUJ_pxpTaP5ghZCeXHApKvJCpyjU8HR1JDA7alZcuJf2dey95WWM_7Dx2OtjlyrWEZKcQG838j2QOt2NgcfBi5KpLKNl69XLjwgzu0WG7tue0RQyPqWYQJHElAoJDDqK97vpw_A2nIUtXmIXIMv5q0uYt23r1kzeSB9g_w4g9IQiLUxqEpXPsWroLpNG6JPgewGwJng',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({"result":"negative","sampleId":"AAA00000014","labId":"smth4","dateTime":"2020-10-05T09:34:50.545Z","testKit":"cos","resultInfo":"some information","sampleCreationDate":"2020-10-05T09:34:50.545Z","processTime":"2020-10-05T09:34:50.545Z","ch1Target":"ORF1ab","ch1Result":"Negative","ch1Cq":111.111,"ch2Target":"ORF2ab","ch2Result":"Positive","ch2Cq":222.222,"ch3Target":"ORF3ab","ch3Result":"Negative","ch3Cq":333.333,"ch4Target":"ORF4ab","ch4Result":"Positive","ch4Cq":444.444})

    },
    {
        'method': 'POST',
        'url': 'https://5fck9n9ora.execute-api.eu-west-2.amazonaws.com/srikanthm/results',
        'headers': {
            'Authorization': 'eyJraWQiOiJvWUl3XC9tbjJqZkNPa3JzMllQdWl2cTZBbEFhaFp0T1NRd1wvQWhtaDZxMW89IiwiYWxnIjoiUlMyNTYifQ.eyJzdWIiOiI1NDY4YjdmNy0yNGUwLTRkMWItYWVmYS0wNTNmYTgxYmUxNmQiLCJhdWQiOiIyNWRlbjc4YjNrZmE4b2gyMm1pN2g5OW84ZSIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJldmVudF9pZCI6IjJlYWZhMmRmLTRkOTItNDMxZC05OGE2LTA4NjM0MTdjYjMxMSIsInRva2VuX3VzZSI6ImlkIiwiYXV0aF90aW1lIjoxNjEyMjEzNjEwLCJpc3MiOiJodHRwczpcL1wvY29nbml0by1pZHAuZXUtd2VzdC0yLmFtYXpvbmF3cy5jb21cL2V1LXdlc3QtMl85d3VrZGZyNXEiLCJjb2duaXRvOnVzZXJuYW1lIjoidGVzdCIsImV4cCI6MTYxMjMwMDAxMCwiaWF0IjoxNjEyMjEzNjExLCJlbWFpbCI6Im1hcmNpbmRAa2Fpbm9zLmNvbSJ9.EqHZHMZHcY1R1gtZL0TAWXobKvxWiCLASO8wzMY2wjIq0FvHR6PFhbkzJhgGJS-xgP4SxleOtzMp19mrnnlQCbwTz9kUtJckW9rXJSDJWolxbT-yP80vjyPXzbwpAOvXZJ-1NGP4S3GWIHLuUJ_pxpTaP5ghZCeXHApKvJCpyjU8HR1JDA7alZcuJf2dey95WWM_7Dx2OtjlyrWEZKcQG838j2QOt2NgcfBi5KpLKNl69XLjwgzu0WG7tue0RQyPqWYQJHElAoJDDqK97vpw_A2nIUtXmIXIMv5q0uYt23r1kzeSB9g_w4g9IQiLUxqEpXPsWroLpNG6JPgewGwJng',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({"result":"negative","sampleId":"AAA00000015","labId":"smth4","dateTime":"2020-10-05T09:34:50.545Z","testKit":"cos","resultInfo":"some information","sampleCreationDate":"2020-10-05T09:34:50.545Z","processTime":"2020-10-05T09:34:50.545Z","ch1Target":"ORF1ab","ch1Result":"Negative","ch1Cq":111.111,"ch2Target":"ORF2ab","ch2Result":"Positive","ch2Cq":222.222,"ch3Target":"ORF3ab","ch3Result":"Negative","ch3Cq":333.333,"ch4Target":"ORF4ab","ch4Result":"Positive","ch4Cq":444.444})

    },
    {
        'method': 'POST',
        'url': 'https://5fck9n9ora.execute-api.eu-west-2.amazonaws.com/srikanthm/results',
        'headers': {
            'Authorization': 'eyJraWQiOiJvWUl3XC9tbjJqZkNPa3JzMllQdWl2cTZBbEFhaFp0T1NRd1wvQWhtaDZxMW89IiwiYWxnIjoiUlMyNTYifQ.eyJzdWIiOiI1NDY4YjdmNy0yNGUwLTRkMWItYWVmYS0wNTNmYTgxYmUxNmQiLCJhdWQiOiIyNWRlbjc4YjNrZmE4b2gyMm1pN2g5OW84ZSIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJldmVudF9pZCI6IjJlYWZhMmRmLTRkOTItNDMxZC05OGE2LTA4NjM0MTdjYjMxMSIsInRva2VuX3VzZSI6ImlkIiwiYXV0aF90aW1lIjoxNjEyMjEzNjEwLCJpc3MiOiJodHRwczpcL1wvY29nbml0by1pZHAuZXUtd2VzdC0yLmFtYXpvbmF3cy5jb21cL2V1LXdlc3QtMl85d3VrZGZyNXEiLCJjb2duaXRvOnVzZXJuYW1lIjoidGVzdCIsImV4cCI6MTYxMjMwMDAxMCwiaWF0IjoxNjEyMjEzNjExLCJlbWFpbCI6Im1hcmNpbmRAa2Fpbm9zLmNvbSJ9.EqHZHMZHcY1R1gtZL0TAWXobKvxWiCLASO8wzMY2wjIq0FvHR6PFhbkzJhgGJS-xgP4SxleOtzMp19mrnnlQCbwTz9kUtJckW9rXJSDJWolxbT-yP80vjyPXzbwpAOvXZJ-1NGP4S3GWIHLuUJ_pxpTaP5ghZCeXHApKvJCpyjU8HR1JDA7alZcuJf2dey95WWM_7Dx2OtjlyrWEZKcQG838j2QOt2NgcfBi5KpLKNl69XLjwgzu0WG7tue0RQyPqWYQJHElAoJDDqK97vpw_A2nIUtXmIXIMv5q0uYt23r1kzeSB9g_w4g9IQiLUxqEpXPsWroLpNG6JPgewGwJng',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({"result":"negative","sampleId":"AAA00000016","labId":"smth4","dateTime":"2020-10-05T09:34:50.545Z","testKit":"cos","resultInfo":"some information","sampleCreationDate":"2020-10-05T09:34:50.545Z","processTime":"2020-10-05T09:34:50.545Z","ch1Target":"ORF1ab","ch1Result":"Negative","ch1Cq":111.111,"ch2Target":"ORF2ab","ch2Result":"Positive","ch2Cq":222.222,"ch3Target":"ORF3ab","ch3Result":"Negative","ch3Cq":333.333,"ch4Target":"ORF4ab","ch4Result":"Positive","ch4Cq":444.444})

    },
    {
        'method': 'POST',
        'url': 'https://5fck9n9ora.execute-api.eu-west-2.amazonaws.com/srikanthm/results',
        'headers': {
            'Authorization': 'eyJraWQiOiJvWUl3XC9tbjJqZkNPa3JzMllQdWl2cTZBbEFhaFp0T1NRd1wvQWhtaDZxMW89IiwiYWxnIjoiUlMyNTYifQ.eyJzdWIiOiI1NDY4YjdmNy0yNGUwLTRkMWItYWVmYS0wNTNmYTgxYmUxNmQiLCJhdWQiOiIyNWRlbjc4YjNrZmE4b2gyMm1pN2g5OW84ZSIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJldmVudF9pZCI6IjJlYWZhMmRmLTRkOTItNDMxZC05OGE2LTA4NjM0MTdjYjMxMSIsInRva2VuX3VzZSI6ImlkIiwiYXV0aF90aW1lIjoxNjEyMjEzNjEwLCJpc3MiOiJodHRwczpcL1wvY29nbml0by1pZHAuZXUtd2VzdC0yLmFtYXpvbmF3cy5jb21cL2V1LXdlc3QtMl85d3VrZGZyNXEiLCJjb2duaXRvOnVzZXJuYW1lIjoidGVzdCIsImV4cCI6MTYxMjMwMDAxMCwiaWF0IjoxNjEyMjEzNjExLCJlbWFpbCI6Im1hcmNpbmRAa2Fpbm9zLmNvbSJ9.EqHZHMZHcY1R1gtZL0TAWXobKvxWiCLASO8wzMY2wjIq0FvHR6PFhbkzJhgGJS-xgP4SxleOtzMp19mrnnlQCbwTz9kUtJckW9rXJSDJWolxbT-yP80vjyPXzbwpAOvXZJ-1NGP4S3GWIHLuUJ_pxpTaP5ghZCeXHApKvJCpyjU8HR1JDA7alZcuJf2dey95WWM_7Dx2OtjlyrWEZKcQG838j2QOt2NgcfBi5KpLKNl69XLjwgzu0WG7tue0RQyPqWYQJHElAoJDDqK97vpw_A2nIUtXmIXIMv5q0uYt23r1kzeSB9g_w4g9IQiLUxqEpXPsWroLpNG6JPgewGwJng',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({"result":"negative","sampleId":"AAA00000017","labId":"smth4","dateTime":"2020-10-05T09:34:50.545Z","testKit":"cos","resultInfo":"some information","sampleCreationDate":"2020-10-05T09:34:50.545Z","processTime":"2020-10-05T09:34:50.545Z","ch1Target":"ORF1ab","ch1Result":"Negative","ch1Cq":111.111,"ch2Target":"ORF2ab","ch2Result":"Positive","ch2Cq":222.222,"ch3Target":"ORF3ab","ch3Result":"Negative","ch3Cq":333.333,"ch4Target":"ORF4ab","ch4Result":"Positive","ch4Cq":444.444})

    },
    {
        'method': 'POST',
        'url': 'https://5fck9n9ora.execute-api.eu-west-2.amazonaws.com/srikanthm/results',
        'headers': {
            'Authorization': 'eyJraWQiOiJvWUl3XC9tbjJqZkNPa3JzMllQdWl2cTZBbEFhaFp0T1NRd1wvQWhtaDZxMW89IiwiYWxnIjoiUlMyNTYifQ.eyJzdWIiOiI1NDY4YjdmNy0yNGUwLTRkMWItYWVmYS0wNTNmYTgxYmUxNmQiLCJhdWQiOiIyNWRlbjc4YjNrZmE4b2gyMm1pN2g5OW84ZSIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJldmVudF9pZCI6IjJlYWZhMmRmLTRkOTItNDMxZC05OGE2LTA4NjM0MTdjYjMxMSIsInRva2VuX3VzZSI6ImlkIiwiYXV0aF90aW1lIjoxNjEyMjEzNjEwLCJpc3MiOiJodHRwczpcL1wvY29nbml0by1pZHAuZXUtd2VzdC0yLmFtYXpvbmF3cy5jb21cL2V1LXdlc3QtMl85d3VrZGZyNXEiLCJjb2duaXRvOnVzZXJuYW1lIjoidGVzdCIsImV4cCI6MTYxMjMwMDAxMCwiaWF0IjoxNjEyMjEzNjExLCJlbWFpbCI6Im1hcmNpbmRAa2Fpbm9zLmNvbSJ9.EqHZHMZHcY1R1gtZL0TAWXobKvxWiCLASO8wzMY2wjIq0FvHR6PFhbkzJhgGJS-xgP4SxleOtzMp19mrnnlQCbwTz9kUtJckW9rXJSDJWolxbT-yP80vjyPXzbwpAOvXZJ-1NGP4S3GWIHLuUJ_pxpTaP5ghZCeXHApKvJCpyjU8HR1JDA7alZcuJf2dey95WWM_7Dx2OtjlyrWEZKcQG838j2QOt2NgcfBi5KpLKNl69XLjwgzu0WG7tue0RQyPqWYQJHElAoJDDqK97vpw_A2nIUtXmIXIMv5q0uYt23r1kzeSB9g_w4g9IQiLUxqEpXPsWroLpNG6JPgewGwJng',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({"result":"negative","sampleId":"AAA00000018","labId":"smth4","dateTime":"2020-10-05T09:34:50.545Z","testKit":"cos","resultInfo":"some information","sampleCreationDate":"2020-10-05T09:34:50.545Z","processTime":"2020-10-05T09:34:50.545Z","ch1Target":"ORF1ab","ch1Result":"Negative","ch1Cq":111.111,"ch2Target":"ORF2ab","ch2Result":"Positive","ch2Cq":222.222,"ch3Target":"ORF3ab","ch3Result":"Negative","ch3Cq":333.333,"ch4Target":"ORF4ab","ch4Result":"Positive","ch4Cq":444.444})

    },
    {
        'method': 'POST',
        'url': 'https://5fck9n9ora.execute-api.eu-west-2.amazonaws.com/srikanthm/results',
        'headers': {
            'Authorization': 'eyJraWQiOiJvWUl3XC9tbjJqZkNPa3JzMllQdWl2cTZBbEFhaFp0T1NRd1wvQWhtaDZxMW89IiwiYWxnIjoiUlMyNTYifQ.eyJzdWIiOiI1NDY4YjdmNy0yNGUwLTRkMWItYWVmYS0wNTNmYTgxYmUxNmQiLCJhdWQiOiIyNWRlbjc4YjNrZmE4b2gyMm1pN2g5OW84ZSIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJldmVudF9pZCI6IjJlYWZhMmRmLTRkOTItNDMxZC05OGE2LTA4NjM0MTdjYjMxMSIsInRva2VuX3VzZSI6ImlkIiwiYXV0aF90aW1lIjoxNjEyMjEzNjEwLCJpc3MiOiJodHRwczpcL1wvY29nbml0by1pZHAuZXUtd2VzdC0yLmFtYXpvbmF3cy5jb21cL2V1LXdlc3QtMl85d3VrZGZyNXEiLCJjb2duaXRvOnVzZXJuYW1lIjoidGVzdCIsImV4cCI6MTYxMjMwMDAxMCwiaWF0IjoxNjEyMjEzNjExLCJlbWFpbCI6Im1hcmNpbmRAa2Fpbm9zLmNvbSJ9.EqHZHMZHcY1R1gtZL0TAWXobKvxWiCLASO8wzMY2wjIq0FvHR6PFhbkzJhgGJS-xgP4SxleOtzMp19mrnnlQCbwTz9kUtJckW9rXJSDJWolxbT-yP80vjyPXzbwpAOvXZJ-1NGP4S3GWIHLuUJ_pxpTaP5ghZCeXHApKvJCpyjU8HR1JDA7alZcuJf2dey95WWM_7Dx2OtjlyrWEZKcQG838j2QOt2NgcfBi5KpLKNl69XLjwgzu0WG7tue0RQyPqWYQJHElAoJDDqK97vpw_A2nIUtXmIXIMv5q0uYt23r1kzeSB9g_w4g9IQiLUxqEpXPsWroLpNG6JPgewGwJng',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({"result":"negative","sampleId":"AAA00000019","labId":"smth4","dateTime":"2020-10-05T09:34:50.545Z","testKit":"cos","resultInfo":"some information","sampleCreationDate":"2020-10-05T09:34:50.545Z","processTime":"2020-10-05T09:34:50.545Z","ch1Target":"ORF1ab","ch1Result":"Negative","ch1Cq":111.111,"ch2Target":"ORF2ab","ch2Result":"Positive","ch2Cq":222.222,"ch3Target":"ORF3ab","ch3Result":"Negative","ch3Cq":333.333,"ch4Target":"ORF4ab","ch4Result":"Positive","ch4Cq":444.444})

    },
    {
        'method': 'POST',
        'url': 'https://5fck9n9ora.execute-api.eu-west-2.amazonaws.com/srikanthm/results',
        'headers': {
            'Authorization': 'eyJraWQiOiJvWUl3XC9tbjJqZkNPa3JzMllQdWl2cTZBbEFhaFp0T1NRd1wvQWhtaDZxMW89IiwiYWxnIjoiUlMyNTYifQ.eyJzdWIiOiI1NDY4YjdmNy0yNGUwLTRkMWItYWVmYS0wNTNmYTgxYmUxNmQiLCJhdWQiOiIyNWRlbjc4YjNrZmE4b2gyMm1pN2g5OW84ZSIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJldmVudF9pZCI6IjJlYWZhMmRmLTRkOTItNDMxZC05OGE2LTA4NjM0MTdjYjMxMSIsInRva2VuX3VzZSI6ImlkIiwiYXV0aF90aW1lIjoxNjEyMjEzNjEwLCJpc3MiOiJodHRwczpcL1wvY29nbml0by1pZHAuZXUtd2VzdC0yLmFtYXpvbmF3cy5jb21cL2V1LXdlc3QtMl85d3VrZGZyNXEiLCJjb2duaXRvOnVzZXJuYW1lIjoidGVzdCIsImV4cCI6MTYxMjMwMDAxMCwiaWF0IjoxNjEyMjEzNjExLCJlbWFpbCI6Im1hcmNpbmRAa2Fpbm9zLmNvbSJ9.EqHZHMZHcY1R1gtZL0TAWXobKvxWiCLASO8wzMY2wjIq0FvHR6PFhbkzJhgGJS-xgP4SxleOtzMp19mrnnlQCbwTz9kUtJckW9rXJSDJWolxbT-yP80vjyPXzbwpAOvXZJ-1NGP4S3GWIHLuUJ_pxpTaP5ghZCeXHApKvJCpyjU8HR1JDA7alZcuJf2dey95WWM_7Dx2OtjlyrWEZKcQG838j2QOt2NgcfBi5KpLKNl69XLjwgzu0WG7tue0RQyPqWYQJHElAoJDDqK97vpw_A2nIUtXmIXIMv5q0uYt23r1kzeSB9g_w4g9IQiLUxqEpXPsWroLpNG6JPgewGwJng',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({"result":"negative","sampleId":"AAA00000020","labId":"smth4","dateTime":"2020-10-05T09:34:50.545Z","testKit":"cos","resultInfo":"some information","sampleCreationDate":"2020-10-05T09:34:50.545Z","processTime":"2020-10-05T09:34:50.545Z","ch1Target":"ORF1ab","ch1Result":"Negative","ch1Cq":111.111,"ch2Target":"ORF2ab","ch2Result":"Positive","ch2Cq":222.222,"ch3Target":"ORF3ab","ch3Result":"Negative","ch3Cq":333.333,"ch4Target":"ORF4ab","ch4Result":"Positive","ch4Cq":444.444})

    },
    {
        'method': 'POST',
        'url': 'https://5fck9n9ora.execute-api.eu-west-2.amazonaws.com/srikanthm/results',
        'headers': {
            'Authorization': 'eyJraWQiOiJvWUl3XC9tbjJqZkNPa3JzMllQdWl2cTZBbEFhaFp0T1NRd1wvQWhtaDZxMW89IiwiYWxnIjoiUlMyNTYifQ.eyJzdWIiOiI1NDY4YjdmNy0yNGUwLTRkMWItYWVmYS0wNTNmYTgxYmUxNmQiLCJhdWQiOiIyNWRlbjc4YjNrZmE4b2gyMm1pN2g5OW84ZSIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJldmVudF9pZCI6IjJlYWZhMmRmLTRkOTItNDMxZC05OGE2LTA4NjM0MTdjYjMxMSIsInRva2VuX3VzZSI6ImlkIiwiYXV0aF90aW1lIjoxNjEyMjEzNjEwLCJpc3MiOiJodHRwczpcL1wvY29nbml0by1pZHAuZXUtd2VzdC0yLmFtYXpvbmF3cy5jb21cL2V1LXdlc3QtMl85d3VrZGZyNXEiLCJjb2duaXRvOnVzZXJuYW1lIjoidGVzdCIsImV4cCI6MTYxMjMwMDAxMCwiaWF0IjoxNjEyMjEzNjExLCJlbWFpbCI6Im1hcmNpbmRAa2Fpbm9zLmNvbSJ9.EqHZHMZHcY1R1gtZL0TAWXobKvxWiCLASO8wzMY2wjIq0FvHR6PFhbkzJhgGJS-xgP4SxleOtzMp19mrnnlQCbwTz9kUtJckW9rXJSDJWolxbT-yP80vjyPXzbwpAOvXZJ-1NGP4S3GWIHLuUJ_pxpTaP5ghZCeXHApKvJCpyjU8HR1JDA7alZcuJf2dey95WWM_7Dx2OtjlyrWEZKcQG838j2QOt2NgcfBi5KpLKNl69XLjwgzu0WG7tue0RQyPqWYQJHElAoJDDqK97vpw_A2nIUtXmIXIMv5q0uYt23r1kzeSB9g_w4g9IQiLUxqEpXPsWroLpNG6JPgewGwJng',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({"result":"negative","sampleId":"AAA00000021","labId":"smth4","dateTime":"2020-10-05T09:34:50.545Z","testKit":"cos","resultInfo":"some information","sampleCreationDate":"2020-10-05T09:34:50.545Z","processTime":"2020-10-05T09:34:50.545Z","ch1Target":"ORF1ab","ch1Result":"Negative","ch1Cq":111.111,"ch2Target":"ORF2ab","ch2Result":"Positive","ch2Cq":222.222,"ch3Target":"ORF3ab","ch3Result":"Negative","ch3Cq":333.333,"ch4Target":"ORF4ab","ch4Result":"Positive","ch4Cq":444.444})

    },
    {
        'method': 'POST',
        'url': 'https://5fck9n9ora.execute-api.eu-west-2.amazonaws.com/srikanthm/results',
        'headers': {
            'Authorization': 'eyJraWQiOiJvWUl3XC9tbjJqZkNPa3JzMllQdWl2cTZBbEFhaFp0T1NRd1wvQWhtaDZxMW89IiwiYWxnIjoiUlMyNTYifQ.eyJzdWIiOiI1NDY4YjdmNy0yNGUwLTRkMWItYWVmYS0wNTNmYTgxYmUxNmQiLCJhdWQiOiIyNWRlbjc4YjNrZmE4b2gyMm1pN2g5OW84ZSIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJldmVudF9pZCI6IjJlYWZhMmRmLTRkOTItNDMxZC05OGE2LTA4NjM0MTdjYjMxMSIsInRva2VuX3VzZSI6ImlkIiwiYXV0aF90aW1lIjoxNjEyMjEzNjEwLCJpc3MiOiJodHRwczpcL1wvY29nbml0by1pZHAuZXUtd2VzdC0yLmFtYXpvbmF3cy5jb21cL2V1LXdlc3QtMl85d3VrZGZyNXEiLCJjb2duaXRvOnVzZXJuYW1lIjoidGVzdCIsImV4cCI6MTYxMjMwMDAxMCwiaWF0IjoxNjEyMjEzNjExLCJlbWFpbCI6Im1hcmNpbmRAa2Fpbm9zLmNvbSJ9.EqHZHMZHcY1R1gtZL0TAWXobKvxWiCLASO8wzMY2wjIq0FvHR6PFhbkzJhgGJS-xgP4SxleOtzMp19mrnnlQCbwTz9kUtJckW9rXJSDJWolxbT-yP80vjyPXzbwpAOvXZJ-1NGP4S3GWIHLuUJ_pxpTaP5ghZCeXHApKvJCpyjU8HR1JDA7alZcuJf2dey95WWM_7Dx2OtjlyrWEZKcQG838j2QOt2NgcfBi5KpLKNl69XLjwgzu0WG7tue0RQyPqWYQJHElAoJDDqK97vpw_A2nIUtXmIXIMv5q0uYt23r1kzeSB9g_w4g9IQiLUxqEpXPsWroLpNG6JPgewGwJng',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({"result":"negative","sampleId":"AAA00000022","labId":"smth4","dateTime":"2020-10-05T09:34:50.545Z","testKit":"cos","resultInfo":"some information","sampleCreationDate":"2020-10-05T09:34:50.545Z","processTime":"2020-10-05T09:34:50.545Z","ch1Target":"ORF1ab","ch1Result":"Negative","ch1Cq":111.111,"ch2Target":"ORF2ab","ch2Result":"Positive","ch2Cq":222.222,"ch3Target":"ORF3ab","ch3Result":"Negative","ch3Cq":333.333,"ch4Target":"ORF4ab","ch4Result":"Positive","ch4Cq":444.444})

    },
    {
        'method': 'POST',
        'url': 'https://5fck9n9ora.execute-api.eu-west-2.amazonaws.com/srikanthm/results',
        'headers': {
            'Authorization': 'eyJraWQiOiJvWUl3XC9tbjJqZkNPa3JzMllQdWl2cTZBbEFhaFp0T1NRd1wvQWhtaDZxMW89IiwiYWxnIjoiUlMyNTYifQ.eyJzdWIiOiI1NDY4YjdmNy0yNGUwLTRkMWItYWVmYS0wNTNmYTgxYmUxNmQiLCJhdWQiOiIyNWRlbjc4YjNrZmE4b2gyMm1pN2g5OW84ZSIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJldmVudF9pZCI6IjJlYWZhMmRmLTRkOTItNDMxZC05OGE2LTA4NjM0MTdjYjMxMSIsInRva2VuX3VzZSI6ImlkIiwiYXV0aF90aW1lIjoxNjEyMjEzNjEwLCJpc3MiOiJodHRwczpcL1wvY29nbml0by1pZHAuZXUtd2VzdC0yLmFtYXpvbmF3cy5jb21cL2V1LXdlc3QtMl85d3VrZGZyNXEiLCJjb2duaXRvOnVzZXJuYW1lIjoidGVzdCIsImV4cCI6MTYxMjMwMDAxMCwiaWF0IjoxNjEyMjEzNjExLCJlbWFpbCI6Im1hcmNpbmRAa2Fpbm9zLmNvbSJ9.EqHZHMZHcY1R1gtZL0TAWXobKvxWiCLASO8wzMY2wjIq0FvHR6PFhbkzJhgGJS-xgP4SxleOtzMp19mrnnlQCbwTz9kUtJckW9rXJSDJWolxbT-yP80vjyPXzbwpAOvXZJ-1NGP4S3GWIHLuUJ_pxpTaP5ghZCeXHApKvJCpyjU8HR1JDA7alZcuJf2dey95WWM_7Dx2OtjlyrWEZKcQG838j2QOt2NgcfBi5KpLKNl69XLjwgzu0WG7tue0RQyPqWYQJHElAoJDDqK97vpw_A2nIUtXmIXIMv5q0uYt23r1kzeSB9g_w4g9IQiLUxqEpXPsWroLpNG6JPgewGwJng',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({"result":"negative","sampleId":"AAA00000023","labId":"smth4","dateTime":"2020-10-05T09:34:50.545Z","testKit":"cos","resultInfo":"some information","sampleCreationDate":"2020-10-05T09:34:50.545Z","processTime":"2020-10-05T09:34:50.545Z","ch1Target":"ORF1ab","ch1Result":"Negative","ch1Cq":111.111,"ch2Target":"ORF2ab","ch2Result":"Positive","ch2Cq":222.222,"ch3Target":"ORF3ab","ch3Result":"Negative","ch3Cq":333.333,"ch4Target":"ORF4ab","ch4Result":"Positive","ch4Cq":444.444})

    },
    {
        'method': 'POST',
        'url': 'https://5fck9n9ora.execute-api.eu-west-2.amazonaws.com/srikanthm/results',
        'headers': {
            'Authorization': 'eyJraWQiOiJvWUl3XC9tbjJqZkNPa3JzMllQdWl2cTZBbEFhaFp0T1NRd1wvQWhtaDZxMW89IiwiYWxnIjoiUlMyNTYifQ.eyJzdWIiOiI1NDY4YjdmNy0yNGUwLTRkMWItYWVmYS0wNTNmYTgxYmUxNmQiLCJhdWQiOiIyNWRlbjc4YjNrZmE4b2gyMm1pN2g5OW84ZSIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJldmVudF9pZCI6IjJlYWZhMmRmLTRkOTItNDMxZC05OGE2LTA4NjM0MTdjYjMxMSIsInRva2VuX3VzZSI6ImlkIiwiYXV0aF90aW1lIjoxNjEyMjEzNjEwLCJpc3MiOiJodHRwczpcL1wvY29nbml0by1pZHAuZXUtd2VzdC0yLmFtYXpvbmF3cy5jb21cL2V1LXdlc3QtMl85d3VrZGZyNXEiLCJjb2duaXRvOnVzZXJuYW1lIjoidGVzdCIsImV4cCI6MTYxMjMwMDAxMCwiaWF0IjoxNjEyMjEzNjExLCJlbWFpbCI6Im1hcmNpbmRAa2Fpbm9zLmNvbSJ9.EqHZHMZHcY1R1gtZL0TAWXobKvxWiCLASO8wzMY2wjIq0FvHR6PFhbkzJhgGJS-xgP4SxleOtzMp19mrnnlQCbwTz9kUtJckW9rXJSDJWolxbT-yP80vjyPXzbwpAOvXZJ-1NGP4S3GWIHLuUJ_pxpTaP5ghZCeXHApKvJCpyjU8HR1JDA7alZcuJf2dey95WWM_7Dx2OtjlyrWEZKcQG838j2QOt2NgcfBi5KpLKNl69XLjwgzu0WG7tue0RQyPqWYQJHElAoJDDqK97vpw_A2nIUtXmIXIMv5q0uYt23r1kzeSB9g_w4g9IQiLUxqEpXPsWroLpNG6JPgewGwJng',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({"result":"negative","sampleId":"AAA00000024","labId":"smth4","dateTime":"2020-10-05T09:34:50.545Z","testKit":"cos","resultInfo":"some information","sampleCreationDate":"2020-10-05T09:34:50.545Z","processTime":"2020-10-05T09:34:50.545Z","ch1Target":"ORF1ab","ch1Result":"Negative","ch1Cq":111.111,"ch2Target":"ORF2ab","ch2Result":"Positive","ch2Cq":222.222,"ch3Target":"ORF3ab","ch3Result":"Negative","ch3Cq":333.333,"ch4Target":"ORF4ab","ch4Result":"Positive","ch4Cq":444.444})

    },
    {
        'method': 'POST',
        'url': 'https://5fck9n9ora.execute-api.eu-west-2.amazonaws.com/srikanthm/results',
        'headers': {
            'Authorization': 'eyJraWQiOiJvWUl3XC9tbjJqZkNPa3JzMllQdWl2cTZBbEFhaFp0T1NRd1wvQWhtaDZxMW89IiwiYWxnIjoiUlMyNTYifQ.eyJzdWIiOiI1NDY4YjdmNy0yNGUwLTRkMWItYWVmYS0wNTNmYTgxYmUxNmQiLCJhdWQiOiIyNWRlbjc4YjNrZmE4b2gyMm1pN2g5OW84ZSIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJldmVudF9pZCI6IjJlYWZhMmRmLTRkOTItNDMxZC05OGE2LTA4NjM0MTdjYjMxMSIsInRva2VuX3VzZSI6ImlkIiwiYXV0aF90aW1lIjoxNjEyMjEzNjEwLCJpc3MiOiJodHRwczpcL1wvY29nbml0by1pZHAuZXUtd2VzdC0yLmFtYXpvbmF3cy5jb21cL2V1LXdlc3QtMl85d3VrZGZyNXEiLCJjb2duaXRvOnVzZXJuYW1lIjoidGVzdCIsImV4cCI6MTYxMjMwMDAxMCwiaWF0IjoxNjEyMjEzNjExLCJlbWFpbCI6Im1hcmNpbmRAa2Fpbm9zLmNvbSJ9.EqHZHMZHcY1R1gtZL0TAWXobKvxWiCLASO8wzMY2wjIq0FvHR6PFhbkzJhgGJS-xgP4SxleOtzMp19mrnnlQCbwTz9kUtJckW9rXJSDJWolxbT-yP80vjyPXzbwpAOvXZJ-1NGP4S3GWIHLuUJ_pxpTaP5ghZCeXHApKvJCpyjU8HR1JDA7alZcuJf2dey95WWM_7Dx2OtjlyrWEZKcQG838j2QOt2NgcfBi5KpLKNl69XLjwgzu0WG7tue0RQyPqWYQJHElAoJDDqK97vpw_A2nIUtXmIXIMv5q0uYt23r1kzeSB9g_w4g9IQiLUxqEpXPsWroLpNG6JPgewGwJng',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({"result":"negative","sampleId":"AAA00000025","labId":"smth4","dateTime":"2020-10-05T09:34:50.545Z","testKit":"cos","resultInfo":"some information","sampleCreationDate":"2020-10-05T09:34:50.545Z","processTime":"2020-10-05T09:34:50.545Z","ch1Target":"ORF1ab","ch1Result":"Negative","ch1Cq":111.111,"ch2Target":"ORF2ab","ch2Result":"Positive","ch2Cq":222.222,"ch3Target":"ORF3ab","ch3Result":"Negative","ch3Cq":333.333,"ch4Target":"ORF4ab","ch4Result":"Positive","ch4Cq":444.444})

    },
    {
        'method': 'POST',
        'url': 'https://5fck9n9ora.execute-api.eu-west-2.amazonaws.com/srikanthm/results',
        'headers': {
            'Authorization': 'eyJraWQiOiJvWUl3XC9tbjJqZkNPa3JzMllQdWl2cTZBbEFhaFp0T1NRd1wvQWhtaDZxMW89IiwiYWxnIjoiUlMyNTYifQ.eyJzdWIiOiI1NDY4YjdmNy0yNGUwLTRkMWItYWVmYS0wNTNmYTgxYmUxNmQiLCJhdWQiOiIyNWRlbjc4YjNrZmE4b2gyMm1pN2g5OW84ZSIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJldmVudF9pZCI6IjJlYWZhMmRmLTRkOTItNDMxZC05OGE2LTA4NjM0MTdjYjMxMSIsInRva2VuX3VzZSI6ImlkIiwiYXV0aF90aW1lIjoxNjEyMjEzNjEwLCJpc3MiOiJodHRwczpcL1wvY29nbml0by1pZHAuZXUtd2VzdC0yLmFtYXpvbmF3cy5jb21cL2V1LXdlc3QtMl85d3VrZGZyNXEiLCJjb2duaXRvOnVzZXJuYW1lIjoidGVzdCIsImV4cCI6MTYxMjMwMDAxMCwiaWF0IjoxNjEyMjEzNjExLCJlbWFpbCI6Im1hcmNpbmRAa2Fpbm9zLmNvbSJ9.EqHZHMZHcY1R1gtZL0TAWXobKvxWiCLASO8wzMY2wjIq0FvHR6PFhbkzJhgGJS-xgP4SxleOtzMp19mrnnlQCbwTz9kUtJckW9rXJSDJWolxbT-yP80vjyPXzbwpAOvXZJ-1NGP4S3GWIHLuUJ_pxpTaP5ghZCeXHApKvJCpyjU8HR1JDA7alZcuJf2dey95WWM_7Dx2OtjlyrWEZKcQG838j2QOt2NgcfBi5KpLKNl69XLjwgzu0WG7tue0RQyPqWYQJHElAoJDDqK97vpw_A2nIUtXmIXIMv5q0uYt23r1kzeSB9g_w4g9IQiLUxqEpXPsWroLpNG6JPgewGwJng',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({"result":"negative","sampleId":"AAA00000026","labId":"smth4","dateTime":"2020-10-05T09:34:50.545Z","testKit":"cos","resultInfo":"some information","sampleCreationDate":"2020-10-05T09:34:50.545Z","processTime":"2020-10-05T09:34:50.545Z","ch1Target":"ORF1ab","ch1Result":"Negative","ch1Cq":111.111,"ch2Target":"ORF2ab","ch2Result":"Positive","ch2Cq":222.222,"ch3Target":"ORF3ab","ch3Result":"Negative","ch3Cq":333.333,"ch4Target":"ORF4ab","ch4Result":"Positive","ch4Cq":444.444})

    },
    {
        'method': 'POST',
        'url': 'https://5fck9n9ora.execute-api.eu-west-2.amazonaws.com/srikanthm/results',
        'headers': {
            'Authorization': 'eyJraWQiOiJvWUl3XC9tbjJqZkNPa3JzMllQdWl2cTZBbEFhaFp0T1NRd1wvQWhtaDZxMW89IiwiYWxnIjoiUlMyNTYifQ.eyJzdWIiOiI1NDY4YjdmNy0yNGUwLTRkMWItYWVmYS0wNTNmYTgxYmUxNmQiLCJhdWQiOiIyNWRlbjc4YjNrZmE4b2gyMm1pN2g5OW84ZSIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJldmVudF9pZCI6IjJlYWZhMmRmLTRkOTItNDMxZC05OGE2LTA4NjM0MTdjYjMxMSIsInRva2VuX3VzZSI6ImlkIiwiYXV0aF90aW1lIjoxNjEyMjEzNjEwLCJpc3MiOiJodHRwczpcL1wvY29nbml0by1pZHAuZXUtd2VzdC0yLmFtYXpvbmF3cy5jb21cL2V1LXdlc3QtMl85d3VrZGZyNXEiLCJjb2duaXRvOnVzZXJuYW1lIjoidGVzdCIsImV4cCI6MTYxMjMwMDAxMCwiaWF0IjoxNjEyMjEzNjExLCJlbWFpbCI6Im1hcmNpbmRAa2Fpbm9zLmNvbSJ9.EqHZHMZHcY1R1gtZL0TAWXobKvxWiCLASO8wzMY2wjIq0FvHR6PFhbkzJhgGJS-xgP4SxleOtzMp19mrnnlQCbwTz9kUtJckW9rXJSDJWolxbT-yP80vjyPXzbwpAOvXZJ-1NGP4S3GWIHLuUJ_pxpTaP5ghZCeXHApKvJCpyjU8HR1JDA7alZcuJf2dey95WWM_7Dx2OtjlyrWEZKcQG838j2QOt2NgcfBi5KpLKNl69XLjwgzu0WG7tue0RQyPqWYQJHElAoJDDqK97vpw_A2nIUtXmIXIMv5q0uYt23r1kzeSB9g_w4g9IQiLUxqEpXPsWroLpNG6JPgewGwJng',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({"result":"negative","sampleId":"AAA00000027","labId":"smth4","dateTime":"2020-10-05T09:34:50.545Z","testKit":"cos","resultInfo":"some information","sampleCreationDate":"2020-10-05T09:34:50.545Z","processTime":"2020-10-05T09:34:50.545Z","ch1Target":"ORF1ab","ch1Result":"Negative","ch1Cq":111.111,"ch2Target":"ORF2ab","ch2Result":"Positive","ch2Cq":222.222,"ch3Target":"ORF3ab","ch3Result":"Negative","ch3Cq":333.333,"ch4Target":"ORF4ab","ch4Result":"Positive","ch4Cq":444.444})

    },
    {
        'method': 'POST',
        'url': 'https://5fck9n9ora.execute-api.eu-west-2.amazonaws.com/srikanthm/results',
        'headers': {
            'Authorization': 'eyJraWQiOiJvWUl3XC9tbjJqZkNPa3JzMllQdWl2cTZBbEFhaFp0T1NRd1wvQWhtaDZxMW89IiwiYWxnIjoiUlMyNTYifQ.eyJzdWIiOiI1NDY4YjdmNy0yNGUwLTRkMWItYWVmYS0wNTNmYTgxYmUxNmQiLCJhdWQiOiIyNWRlbjc4YjNrZmE4b2gyMm1pN2g5OW84ZSIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJldmVudF9pZCI6IjJlYWZhMmRmLTRkOTItNDMxZC05OGE2LTA4NjM0MTdjYjMxMSIsInRva2VuX3VzZSI6ImlkIiwiYXV0aF90aW1lIjoxNjEyMjEzNjEwLCJpc3MiOiJodHRwczpcL1wvY29nbml0by1pZHAuZXUtd2VzdC0yLmFtYXpvbmF3cy5jb21cL2V1LXdlc3QtMl85d3VrZGZyNXEiLCJjb2duaXRvOnVzZXJuYW1lIjoidGVzdCIsImV4cCI6MTYxMjMwMDAxMCwiaWF0IjoxNjEyMjEzNjExLCJlbWFpbCI6Im1hcmNpbmRAa2Fpbm9zLmNvbSJ9.EqHZHMZHcY1R1gtZL0TAWXobKvxWiCLASO8wzMY2wjIq0FvHR6PFhbkzJhgGJS-xgP4SxleOtzMp19mrnnlQCbwTz9kUtJckW9rXJSDJWolxbT-yP80vjyPXzbwpAOvXZJ-1NGP4S3GWIHLuUJ_pxpTaP5ghZCeXHApKvJCpyjU8HR1JDA7alZcuJf2dey95WWM_7Dx2OtjlyrWEZKcQG838j2QOt2NgcfBi5KpLKNl69XLjwgzu0WG7tue0RQyPqWYQJHElAoJDDqK97vpw_A2nIUtXmIXIMv5q0uYt23r1kzeSB9g_w4g9IQiLUxqEpXPsWroLpNG6JPgewGwJng',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({"result":"negative","sampleId":"AAA00000028","labId":"smth4","dateTime":"2020-10-05T09:34:50.545Z","testKit":"cos","resultInfo":"some information","sampleCreationDate":"2020-10-05T09:34:50.545Z","processTime":"2020-10-05T09:34:50.545Z","ch1Target":"ORF1ab","ch1Result":"Negative","ch1Cq":111.111,"ch2Target":"ORF2ab","ch2Result":"Positive","ch2Cq":222.222,"ch3Target":"ORF3ab","ch3Result":"Negative","ch3Cq":333.333,"ch4Target":"ORF4ab","ch4Result":"Positive","ch4Cq":444.444})

    },
    {
        'method': 'POST',
        'url': 'https://5fck9n9ora.execute-api.eu-west-2.amazonaws.com/srikanthm/results',
        'headers': {
            'Authorization': 'eyJraWQiOiJvWUl3XC9tbjJqZkNPa3JzMllQdWl2cTZBbEFhaFp0T1NRd1wvQWhtaDZxMW89IiwiYWxnIjoiUlMyNTYifQ.eyJzdWIiOiI1NDY4YjdmNy0yNGUwLTRkMWItYWVmYS0wNTNmYTgxYmUxNmQiLCJhdWQiOiIyNWRlbjc4YjNrZmE4b2gyMm1pN2g5OW84ZSIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJldmVudF9pZCI6IjJlYWZhMmRmLTRkOTItNDMxZC05OGE2LTA4NjM0MTdjYjMxMSIsInRva2VuX3VzZSI6ImlkIiwiYXV0aF90aW1lIjoxNjEyMjEzNjEwLCJpc3MiOiJodHRwczpcL1wvY29nbml0by1pZHAuZXUtd2VzdC0yLmFtYXpvbmF3cy5jb21cL2V1LXdlc3QtMl85d3VrZGZyNXEiLCJjb2duaXRvOnVzZXJuYW1lIjoidGVzdCIsImV4cCI6MTYxMjMwMDAxMCwiaWF0IjoxNjEyMjEzNjExLCJlbWFpbCI6Im1hcmNpbmRAa2Fpbm9zLmNvbSJ9.EqHZHMZHcY1R1gtZL0TAWXobKvxWiCLASO8wzMY2wjIq0FvHR6PFhbkzJhgGJS-xgP4SxleOtzMp19mrnnlQCbwTz9kUtJckW9rXJSDJWolxbT-yP80vjyPXzbwpAOvXZJ-1NGP4S3GWIHLuUJ_pxpTaP5ghZCeXHApKvJCpyjU8HR1JDA7alZcuJf2dey95WWM_7Dx2OtjlyrWEZKcQG838j2QOt2NgcfBi5KpLKNl69XLjwgzu0WG7tue0RQyPqWYQJHElAoJDDqK97vpw_A2nIUtXmIXIMv5q0uYt23r1kzeSB9g_w4g9IQiLUxqEpXPsWroLpNG6JPgewGwJng',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({"result":"negative","sampleId":"AAA00000029","labId":"smth4","dateTime":"2020-10-05T09:34:50.545Z","testKit":"cos","resultInfo":"some information","sampleCreationDate":"2020-10-05T09:34:50.545Z","processTime":"2020-10-05T09:34:50.545Z","ch1Target":"ORF1ab","ch1Result":"Negative","ch1Cq":111.111,"ch2Target":"ORF2ab","ch2Result":"Positive","ch2Cq":222.222,"ch3Target":"ORF3ab","ch3Result":"Negative","ch3Cq":333.333,"ch4Target":"ORF4ab","ch4Result":"Positive","ch4Cq":444.444})

    },
    {
        'method': 'POST',
        'url': 'https://5fck9n9ora.execute-api.eu-west-2.amazonaws.com/srikanthm/results',
        'headers': {
            'Authorization': 'eyJraWQiOiJvWUl3XC9tbjJqZkNPa3JzMllQdWl2cTZBbEFhaFp0T1NRd1wvQWhtaDZxMW89IiwiYWxnIjoiUlMyNTYifQ.eyJzdWIiOiI1NDY4YjdmNy0yNGUwLTRkMWItYWVmYS0wNTNmYTgxYmUxNmQiLCJhdWQiOiIyNWRlbjc4YjNrZmE4b2gyMm1pN2g5OW84ZSIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJldmVudF9pZCI6IjJlYWZhMmRmLTRkOTItNDMxZC05OGE2LTA4NjM0MTdjYjMxMSIsInRva2VuX3VzZSI6ImlkIiwiYXV0aF90aW1lIjoxNjEyMjEzNjEwLCJpc3MiOiJodHRwczpcL1wvY29nbml0by1pZHAuZXUtd2VzdC0yLmFtYXpvbmF3cy5jb21cL2V1LXdlc3QtMl85d3VrZGZyNXEiLCJjb2duaXRvOnVzZXJuYW1lIjoidGVzdCIsImV4cCI6MTYxMjMwMDAxMCwiaWF0IjoxNjEyMjEzNjExLCJlbWFpbCI6Im1hcmNpbmRAa2Fpbm9zLmNvbSJ9.EqHZHMZHcY1R1gtZL0TAWXobKvxWiCLASO8wzMY2wjIq0FvHR6PFhbkzJhgGJS-xgP4SxleOtzMp19mrnnlQCbwTz9kUtJckW9rXJSDJWolxbT-yP80vjyPXzbwpAOvXZJ-1NGP4S3GWIHLuUJ_pxpTaP5ghZCeXHApKvJCpyjU8HR1JDA7alZcuJf2dey95WWM_7Dx2OtjlyrWEZKcQG838j2QOt2NgcfBi5KpLKNl69XLjwgzu0WG7tue0RQyPqWYQJHElAoJDDqK97vpw_A2nIUtXmIXIMv5q0uYt23r1kzeSB9g_w4g9IQiLUxqEpXPsWroLpNG6JPgewGwJng',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({"result":"negative","sampleId":"AAA00000030","labId":"smth4","dateTime":"2020-10-05T09:34:50.545Z","testKit":"cos","resultInfo":"some information","sampleCreationDate":"2020-10-05T09:34:50.545Z","processTime":"2020-10-05T09:34:50.545Z","ch1Target":"ORF1ab","ch1Result":"Negative","ch1Cq":111.111,"ch2Target":"ORF2ab","ch2Result":"Positive","ch2Cq":222.222,"ch3Target":"ORF3ab","ch3Result":"Negative","ch3Cq":333.333,"ch4Target":"ORF4ab","ch4Result":"Positive","ch4Cq":444.444})

    },
    {
        'method': 'POST',
        'url': 'https://5fck9n9ora.execute-api.eu-west-2.amazonaws.com/srikanthm/results',
        'headers': {
            'Authorization': 'eyJraWQiOiJvWUl3XC9tbjJqZkNPa3JzMllQdWl2cTZBbEFhaFp0T1NRd1wvQWhtaDZxMW89IiwiYWxnIjoiUlMyNTYifQ.eyJzdWIiOiI1NDY4YjdmNy0yNGUwLTRkMWItYWVmYS0wNTNmYTgxYmUxNmQiLCJhdWQiOiIyNWRlbjc4YjNrZmE4b2gyMm1pN2g5OW84ZSIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJldmVudF9pZCI6IjJlYWZhMmRmLTRkOTItNDMxZC05OGE2LTA4NjM0MTdjYjMxMSIsInRva2VuX3VzZSI6ImlkIiwiYXV0aF90aW1lIjoxNjEyMjEzNjEwLCJpc3MiOiJodHRwczpcL1wvY29nbml0by1pZHAuZXUtd2VzdC0yLmFtYXpvbmF3cy5jb21cL2V1LXdlc3QtMl85d3VrZGZyNXEiLCJjb2duaXRvOnVzZXJuYW1lIjoidGVzdCIsImV4cCI6MTYxMjMwMDAxMCwiaWF0IjoxNjEyMjEzNjExLCJlbWFpbCI6Im1hcmNpbmRAa2Fpbm9zLmNvbSJ9.EqHZHMZHcY1R1gtZL0TAWXobKvxWiCLASO8wzMY2wjIq0FvHR6PFhbkzJhgGJS-xgP4SxleOtzMp19mrnnlQCbwTz9kUtJckW9rXJSDJWolxbT-yP80vjyPXzbwpAOvXZJ-1NGP4S3GWIHLuUJ_pxpTaP5ghZCeXHApKvJCpyjU8HR1JDA7alZcuJf2dey95WWM_7Dx2OtjlyrWEZKcQG838j2QOt2NgcfBi5KpLKNl69XLjwgzu0WG7tue0RQyPqWYQJHElAoJDDqK97vpw_A2nIUtXmIXIMv5q0uYt23r1kzeSB9g_w4g9IQiLUxqEpXPsWroLpNG6JPgewGwJng',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({"result":"negative","sampleId":"AAA00000031","labId":"smth4","dateTime":"2020-10-05T09:34:50.545Z","testKit":"cos","resultInfo":"some information","sampleCreationDate":"2020-10-05T09:34:50.545Z","processTime":"2020-10-05T09:34:50.545Z","ch1Target":"ORF1ab","ch1Result":"Negative","ch1Cq":111.111,"ch2Target":"ORF2ab","ch2Result":"Positive","ch2Cq":222.222,"ch3Target":"ORF3ab","ch3Result":"Negative","ch3Cq":333.333,"ch4Target":"ORF4ab","ch4Result":"Positive","ch4Cq":444.444})

    },
    {
        'method': 'POST',
        'url': 'https://5fck9n9ora.execute-api.eu-west-2.amazonaws.com/srikanthm/results',
        'headers': {
            'Authorization': 'eyJraWQiOiJvWUl3XC9tbjJqZkNPa3JzMllQdWl2cTZBbEFhaFp0T1NRd1wvQWhtaDZxMW89IiwiYWxnIjoiUlMyNTYifQ.eyJzdWIiOiI1NDY4YjdmNy0yNGUwLTRkMWItYWVmYS0wNTNmYTgxYmUxNmQiLCJhdWQiOiIyNWRlbjc4YjNrZmE4b2gyMm1pN2g5OW84ZSIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJldmVudF9pZCI6IjJlYWZhMmRmLTRkOTItNDMxZC05OGE2LTA4NjM0MTdjYjMxMSIsInRva2VuX3VzZSI6ImlkIiwiYXV0aF90aW1lIjoxNjEyMjEzNjEwLCJpc3MiOiJodHRwczpcL1wvY29nbml0by1pZHAuZXUtd2VzdC0yLmFtYXpvbmF3cy5jb21cL2V1LXdlc3QtMl85d3VrZGZyNXEiLCJjb2duaXRvOnVzZXJuYW1lIjoidGVzdCIsImV4cCI6MTYxMjMwMDAxMCwiaWF0IjoxNjEyMjEzNjExLCJlbWFpbCI6Im1hcmNpbmRAa2Fpbm9zLmNvbSJ9.EqHZHMZHcY1R1gtZL0TAWXobKvxWiCLASO8wzMY2wjIq0FvHR6PFhbkzJhgGJS-xgP4SxleOtzMp19mrnnlQCbwTz9kUtJckW9rXJSDJWolxbT-yP80vjyPXzbwpAOvXZJ-1NGP4S3GWIHLuUJ_pxpTaP5ghZCeXHApKvJCpyjU8HR1JDA7alZcuJf2dey95WWM_7Dx2OtjlyrWEZKcQG838j2QOt2NgcfBi5KpLKNl69XLjwgzu0WG7tue0RQyPqWYQJHElAoJDDqK97vpw_A2nIUtXmIXIMv5q0uYt23r1kzeSB9g_w4g9IQiLUxqEpXPsWroLpNG6JPgewGwJng',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({"result":"negative","sampleId":"AAA00000032","labId":"smth4","dateTime":"2020-10-05T09:34:50.545Z","testKit":"cos","resultInfo":"some information","sampleCreationDate":"2020-10-05T09:34:50.545Z","processTime":"2020-10-05T09:34:50.545Z","ch1Target":"ORF1ab","ch1Result":"Negative","ch1Cq":111.111,"ch2Target":"ORF2ab","ch2Result":"Positive","ch2Cq":222.222,"ch3Target":"ORF3ab","ch3Result":"Negative","ch3Cq":333.333,"ch4Target":"ORF4ab","ch4Result":"Positive","ch4Cq":444.444})

    },
    {
        'method': 'POST',
        'url': 'https://5fck9n9ora.execute-api.eu-west-2.amazonaws.com/srikanthm/results',
        'headers': {
            'Authorization': 'eyJraWQiOiJvWUl3XC9tbjJqZkNPa3JzMllQdWl2cTZBbEFhaFp0T1NRd1wvQWhtaDZxMW89IiwiYWxnIjoiUlMyNTYifQ.eyJzdWIiOiI1NDY4YjdmNy0yNGUwLTRkMWItYWVmYS0wNTNmYTgxYmUxNmQiLCJhdWQiOiIyNWRlbjc4YjNrZmE4b2gyMm1pN2g5OW84ZSIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJldmVudF9pZCI6IjJlYWZhMmRmLTRkOTItNDMxZC05OGE2LTA4NjM0MTdjYjMxMSIsInRva2VuX3VzZSI6ImlkIiwiYXV0aF90aW1lIjoxNjEyMjEzNjEwLCJpc3MiOiJodHRwczpcL1wvY29nbml0by1pZHAuZXUtd2VzdC0yLmFtYXpvbmF3cy5jb21cL2V1LXdlc3QtMl85d3VrZGZyNXEiLCJjb2duaXRvOnVzZXJuYW1lIjoidGVzdCIsImV4cCI6MTYxMjMwMDAxMCwiaWF0IjoxNjEyMjEzNjExLCJlbWFpbCI6Im1hcmNpbmRAa2Fpbm9zLmNvbSJ9.EqHZHMZHcY1R1gtZL0TAWXobKvxWiCLASO8wzMY2wjIq0FvHR6PFhbkzJhgGJS-xgP4SxleOtzMp19mrnnlQCbwTz9kUtJckW9rXJSDJWolxbT-yP80vjyPXzbwpAOvXZJ-1NGP4S3GWIHLuUJ_pxpTaP5ghZCeXHApKvJCpyjU8HR1JDA7alZcuJf2dey95WWM_7Dx2OtjlyrWEZKcQG838j2QOt2NgcfBi5KpLKNl69XLjwgzu0WG7tue0RQyPqWYQJHElAoJDDqK97vpw_A2nIUtXmIXIMv5q0uYt23r1kzeSB9g_w4g9IQiLUxqEpXPsWroLpNG6JPgewGwJng',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({"result":"negative","sampleId":"AAA00000033","labId":"smth4","dateTime":"2020-10-05T09:34:50.545Z","testKit":"cos","resultInfo":"some information","sampleCreationDate":"2020-10-05T09:34:50.545Z","processTime":"2020-10-05T09:34:50.545Z","ch1Target":"ORF1ab","ch1Result":"Negative","ch1Cq":111.111,"ch2Target":"ORF2ab","ch2Result":"Positive","ch2Cq":222.222,"ch3Target":"ORF3ab","ch3Result":"Negative","ch3Cq":333.333,"ch4Target":"ORF4ab","ch4Result":"Positive","ch4Cq":444.444})

    },
    {
        'method': 'POST',
        'url': 'https://5fck9n9ora.execute-api.eu-west-2.amazonaws.com/srikanthm/results',
        'headers': {
            'Authorization': 'eyJraWQiOiJvWUl3XC9tbjJqZkNPa3JzMllQdWl2cTZBbEFhaFp0T1NRd1wvQWhtaDZxMW89IiwiYWxnIjoiUlMyNTYifQ.eyJzdWIiOiI1NDY4YjdmNy0yNGUwLTRkMWItYWVmYS0wNTNmYTgxYmUxNmQiLCJhdWQiOiIyNWRlbjc4YjNrZmE4b2gyMm1pN2g5OW84ZSIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJldmVudF9pZCI6IjJlYWZhMmRmLTRkOTItNDMxZC05OGE2LTA4NjM0MTdjYjMxMSIsInRva2VuX3VzZSI6ImlkIiwiYXV0aF90aW1lIjoxNjEyMjEzNjEwLCJpc3MiOiJodHRwczpcL1wvY29nbml0by1pZHAuZXUtd2VzdC0yLmFtYXpvbmF3cy5jb21cL2V1LXdlc3QtMl85d3VrZGZyNXEiLCJjb2duaXRvOnVzZXJuYW1lIjoidGVzdCIsImV4cCI6MTYxMjMwMDAxMCwiaWF0IjoxNjEyMjEzNjExLCJlbWFpbCI6Im1hcmNpbmRAa2Fpbm9zLmNvbSJ9.EqHZHMZHcY1R1gtZL0TAWXobKvxWiCLASO8wzMY2wjIq0FvHR6PFhbkzJhgGJS-xgP4SxleOtzMp19mrnnlQCbwTz9kUtJckW9rXJSDJWolxbT-yP80vjyPXzbwpAOvXZJ-1NGP4S3GWIHLuUJ_pxpTaP5ghZCeXHApKvJCpyjU8HR1JDA7alZcuJf2dey95WWM_7Dx2OtjlyrWEZKcQG838j2QOt2NgcfBi5KpLKNl69XLjwgzu0WG7tue0RQyPqWYQJHElAoJDDqK97vpw_A2nIUtXmIXIMv5q0uYt23r1kzeSB9g_w4g9IQiLUxqEpXPsWroLpNG6JPgewGwJng',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({"result":"negative","sampleId":"AAA00000034","labId":"smth4","dateTime":"2020-10-05T09:34:50.545Z","testKit":"cos","resultInfo":"some information","sampleCreationDate":"2020-10-05T09:34:50.545Z","processTime":"2020-10-05T09:34:50.545Z","ch1Target":"ORF1ab","ch1Result":"Negative","ch1Cq":111.111,"ch2Target":"ORF2ab","ch2Result":"Positive","ch2Cq":222.222,"ch3Target":"ORF3ab","ch3Result":"Negative","ch3Cq":333.333,"ch4Target":"ORF4ab","ch4Result":"Positive","ch4Cq":444.444})

    },
    {
        'method': 'POST',
        'url': 'https://5fck9n9ora.execute-api.eu-west-2.amazonaws.com/srikanthm/results',
        'headers': {
            'Authorization': 'eyJraWQiOiJvWUl3XC9tbjJqZkNPa3JzMllQdWl2cTZBbEFhaFp0T1NRd1wvQWhtaDZxMW89IiwiYWxnIjoiUlMyNTYifQ.eyJzdWIiOiI1NDY4YjdmNy0yNGUwLTRkMWItYWVmYS0wNTNmYTgxYmUxNmQiLCJhdWQiOiIyNWRlbjc4YjNrZmE4b2gyMm1pN2g5OW84ZSIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJldmVudF9pZCI6IjJlYWZhMmRmLTRkOTItNDMxZC05OGE2LTA4NjM0MTdjYjMxMSIsInRva2VuX3VzZSI6ImlkIiwiYXV0aF90aW1lIjoxNjEyMjEzNjEwLCJpc3MiOiJodHRwczpcL1wvY29nbml0by1pZHAuZXUtd2VzdC0yLmFtYXpvbmF3cy5jb21cL2V1LXdlc3QtMl85d3VrZGZyNXEiLCJjb2duaXRvOnVzZXJuYW1lIjoidGVzdCIsImV4cCI6MTYxMjMwMDAxMCwiaWF0IjoxNjEyMjEzNjExLCJlbWFpbCI6Im1hcmNpbmRAa2Fpbm9zLmNvbSJ9.EqHZHMZHcY1R1gtZL0TAWXobKvxWiCLASO8wzMY2wjIq0FvHR6PFhbkzJhgGJS-xgP4SxleOtzMp19mrnnlQCbwTz9kUtJckW9rXJSDJWolxbT-yP80vjyPXzbwpAOvXZJ-1NGP4S3GWIHLuUJ_pxpTaP5ghZCeXHApKvJCpyjU8HR1JDA7alZcuJf2dey95WWM_7Dx2OtjlyrWEZKcQG838j2QOt2NgcfBi5KpLKNl69XLjwgzu0WG7tue0RQyPqWYQJHElAoJDDqK97vpw_A2nIUtXmIXIMv5q0uYt23r1kzeSB9g_w4g9IQiLUxqEpXPsWroLpNG6JPgewGwJng',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({"result":"negative","sampleId":"AAA00000035","labId":"smth4","dateTime":"2020-10-05T09:34:50.545Z","testKit":"cos","resultInfo":"some information","sampleCreationDate":"2020-10-05T09:34:50.545Z","processTime":"2020-10-05T09:34:50.545Z","ch1Target":"ORF1ab","ch1Result":"Negative","ch1Cq":111.111,"ch2Target":"ORF2ab","ch2Result":"Positive","ch2Cq":222.222,"ch3Target":"ORF3ab","ch3Result":"Negative","ch3Cq":333.333,"ch4Target":"ORF4ab","ch4Result":"Positive","ch4Cq":444.444})
    },
];

console.log(options.length);

options.forEach((options) => {
    request(options, function (error, response) {
        if (error) throw new Error(error);
        console.log(response.body);
    });
});
