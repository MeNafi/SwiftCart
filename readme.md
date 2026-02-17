1. null vs undefined – null মান বোঝায় খালি মান, undefined মান বোঝায় কোনো মান নির্ধারিত নেই।

2. map() vs forEach() – map() নতুন array তৈরি করে, forEach() শুধু element iterate করে কোনো নতুন array দেয় না।

3. == vs === – == মান তুলনা করে (type convert করে), === মান ও type দুইই চেক করে।

4. async/await – API ডাটা fetch করার সময় asynchronous কোডকে synchronous মত কাজ করাতে সাহায্য করে।


5. Scope (Global, Function, Block) – ভেরিয়েবল কোথায় access করা যাবে তা নির্ধারণ করে।
  
   Global: ফাংশনের বাইরে declare, সব জায়গা থেকে accessable 

   Function: শুধু function এর ভিতরে accessable 

   Block: {} এর ভিতরে let/const declare হলে শুধু block এর ভিতরে valid  (var ignores block)