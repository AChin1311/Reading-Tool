import goslate
import urllib2

proxy_handler = urllib2.ProxyHandler({"http" : "http://proxy-domain.name:8080"})
proxy_opener = urllib2.build_opener(urllib2.HTTPHandler(proxy_handler),
                                    urllib2.HTTPSHandler(proxy_handler))
gs_with_proxy = goslate.Goslate(opener=proxy_opener, writing=goslate.WRITING_NATIVE)

i = 0
while(i < 267):
  s = raw_input()
  print(s)
  trans = gs_with_proxy.translate(s, 'zh')
  print(trans)
  i += 1
