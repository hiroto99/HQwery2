import re

### ソースコード
source = """ 関数 挨拶() -> なし {表示('こんにちわ');}関数 実行() -> なし {挨拶();}
"""

class Execution:
    """ 実行環境
    """
    # 標準関数
    STD_FUNCS = ['表示']
    
    # インプットソース
    source = ''

    # 実装関数
    funcs = {}
    def __init__(self, source):
        self.source = self.preprocessing(source)
        self.funcs = self.analysis_func(self.source)

    def preprocessing(self, text):
        """ ソース文字列の前処理
        """
        text = text.replace('\n', '')
        return text

    def analysis_func(self, source):
        """ 関数構文の検索
        """
        funcs = {}
        match = re.findall('.+?\s{.+?}', source)
        for f in match:
            temp = re.match('関数\s(.+)\((.*?)\)\s->(.+){(.+)}', f)
            if temp and len(temp.groups()) > 0:
                el = temp.groups() funcs[el[0]] = {
                    'args': el[1],
                    'return': el[2],
                    'content': el[3].strip().split(';'),
                }
        return funcs
        
    def std_func(self, content):
        """ 標準関数の実行
        """
        match = re.match('(.+)\((.*)\)', content)
        if match:
            func_name = match.groups()[0]
            if func_name == '表示':
                print(match.groups()[1])
                    
    def do_content(self, content):
        """ 関数の内容実行
        """
        match = re.match('(.+)\(.*?\)', content)
        if match:
            func_name = match.groups()[0]
            if func_name in self.funcs:
                for todo in self.funcs[func_name]['content']:
                    self.do_content(todo)
                else if func_name in self.STD_FUNCS:
                    self.std_func(content)
                else:
                    print('Error: 関数が見つかりません。')
    
    def exec(self):
        """ 実行関数の実行
        """
        if '実行' in self.funcs:
            for todo in self.funcs['実行']['content']:
                if len(todo) > 0:
                    self.do_content(todo)
        else:
            print('Error: 実行関数がありません。')

execution = Execution(source)
execution.exec()