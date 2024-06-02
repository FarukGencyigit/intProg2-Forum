var threads = [

{
    id: 1,
title: "Merkür",
author: "Faruk",
date: Date.now(),
content: "thread içerik",
yorumlar: [
{
    author: "Mehmet",
    date: Date.now(),
    content: "Merhaba",
},
{
    author: "Ali",
    date: Date.now(),
    content: "Merhaba",
},

{
    cevaplar: "evet"
}


]


},
{
    id: 2,
    title: "Satürn",
    author: "Faruk",
    date: Date.now(),
    content: "thread içerik",
    yorumlar: [
    {
        author: "Mehmet",
        date: Date.now(),
        content: "Merhaba",
    },
    {
        author: "Ali",
        date: Date.now(),
        content: "Merhaba",
    },
    {
        author: "Ziyaretçi",
        date: Date.now(),
        content: "Merhaba",
    }
    ]
},
    {
        id: 3,
        
        title: "Mars",
        author: "Faruk",
        date: Date.now(),
        content: "thread içerik",
        yorumlar: [
        {
            author: "Mehmet",
            date: Date.now(),
            content: "Merhaba",
        }]},
        {
            id: 4,
            
            title: "Jupiter",
            author: "Faruk",
            date: Date.now(),
            content: "thread içerik",
            yorumlar: [
            {
                author: "Mehmet",
                date: Date.now(),
                content: "Merhaba",
            }]},
            {
                id: 5,
                
                title: "Dünya",
                author: "Faruk",
                date: Date.now(),
                content: "thread içerik",
                yorumlar: [
                {
                    author: "Mehmet",
                    date: Date.now(),
                    content: "Merhaba",
                }]},
                {
                    id: 6,
                    
                    title: "Plüto",
                    author: "Faruk",
                    date: Date.now(),
                    content: "thread içerik",
                    yorumlar: [
                    {
                        author: "Mehmet",
                        date: Date.now(),
                        content: "Merhaba",
                    }]},
                    {
                        id: 7,
                        
                        title: "Üranüs",
                        author: "Faruk",
                        date: Date.now(),
                        content: "thread içerik",
                        yorumlar: [
                        {
                            author: "Mehmet",
                            date: Date.now(),
                            content: "Merhaba",
                        }]},
                        {
                            id: 8,
                            
                            title: "Neptün",
                            author: "Faruk",
                            date: Date.now(),
                            content: "thread içerik",
                            yorumlar: [
                            {
                                author: "Mehmet",
                                date: Date.now(),
                                content: "Merhaba",
                            }]},
                            {
                                id: 9,
                                
                                title: "Dış Uzay Hakkında",
                                author: "Faruk",
                                date: Date.now(),
                                content: "thread içerik",
                                yorumlar: [
                                {
                                    author: "Mehmet",
                                    date: Date.now(),
                                    content: "Merhaba",
                                }]},
                                {
                                    id: 10,
                                    
                                    title: "Güneşimiz Hakkında",
                                    author: "Faruk",
                                    date: Date.now(),
                                    content: "thread içerik",
                                    yorumlar: [
                                    {
                                        author: "Mehmet",
                                        date: Date.now(),
                                        content: "Merhaba",
                                    }]},
                                    {
                                        id: 11,
                                        
                                        title: "Diğer-Genel Konuşma Alanı",
                                        author: "Faruk",
                                        date: Date.now(),
                                        content: "thread içerik",
                                        yorumlar: [
                                        {
                                            author: "Mehmet",
                                            date: Date.now(),
                                            content: "Merhaba",
                                            
                                        },

                                        {
                                            author: "Mewewhmet",
                                            date: Date.now(),
                                            content: "Medsarhaba",
                                            
                                        }
                                        
                                        
                                        ]},
                                       
    
    
    ]
    
    
    

var Threads;
if (localStorage && localStorage.getItem('threads')){

    Threads = JSON.parse(localStorage.getItem('threads'));

localStorage.setItem('threads',JSON.stringify('threads'));
}





/*else {

    Threads = defaultThreads;
    localStorage.setItem('threads',JSON.stringify(defaultThreads));
} */