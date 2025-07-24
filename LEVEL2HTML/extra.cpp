#include<iostream>
using namespace std;
int main() {


int s;
if(s.length()==0) return 0;
int i=0; 
while(i<s.size() && s[i]==' ') {
    i++;
}
s=s.substr(i);
int sign= sign + 1;
long ans=0;
if(s[0] == '-') sign=-1;
int max= INT16_MAX,min=INT16_MIN;
i=(s[0]=='+' || s[0] == '-') ? 1:0 ;
while(i<s.length()) {
    if(s[0]==' ' || isdigits(s[i])) {
        ans=ans*10+s[i]-'0';
        if(sign==-1 && -1*ans<min) retrun min;
         if(sign==1 && ans>max) retrun max;
         i++;

    }
    return (int)(sign*ans);
} 

return 0;}